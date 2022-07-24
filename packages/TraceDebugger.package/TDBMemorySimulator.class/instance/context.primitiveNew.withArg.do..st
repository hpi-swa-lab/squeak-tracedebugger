primitives
context: aContext primitiveNew: receiver withArg: sizeRequested do: aBlock
	<simPrimitive: 71>
	<tdbRequiredIf: #shouldIsolate>

	| result |
	result := aBlock value.
	
	(aContext isPrimFailToken: result) ifTrue:
		[result second == #'insufficient object memory'
			ifTrue:
				["Handle insufficient memory on the simulator side. Otherwise, all GC preparation (#flushDependents etc.) would be run in the simulation, which is way too slow. This mimics the behavior of Behavior>>#handleFailingBasicNew[:]."
				| bytesRequested |
				(aContext objectClass: receiver) isMeta ifFalse:
					[^ self context: aContext primitiveFailTokenFor: #'bad receiver'].
				bytesRequested := sizeRequested
					ifNil: [1048576]
					ifNotNil: [receiver byteSizeOfInstanceOfSize: sizeRequested].
				Smalltalk garbageCollect < bytesRequested ifTrue:
					[Smalltalk growMemoryByAtLeast: bytesRequested].
				result := aBlock value.
				(aContext isPrimFailToken: result) ifTrue:
					["Not enough memory. Fail the primitive, but use a different error code than the normal one to prevent the simulated code from going through the GC/OutOfMemory signal hell."
					^ self context: aContext primitiveFailTokenFor: #'insufficient image object memory']]
			ifFalse:
				[^ result]].
	
	self addOwnObject: result top.
	^ result