primitives
context: aContext primitiveEnterCriticalSection: receiver do: aBlock
	<simPrimitive: 186>
	<tdbRequiredIf: #shouldIsolate>

	self flag: #todo. "Simulate critical sections properly. See outcommented fallback implementation of Process>>#primitiveEnterCriticalSection."
	"self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext]."
	
	^ aBlock value