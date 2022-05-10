primitives
context: aContext primitiveExitCriticalSection: receiver do: aBlock
	<simPrimitive: 185>
	<tdbRequiredIf: #shouldIsolate>

	self flag: #todo. "Simulate critical sections properly. See outcommented fallback implementation of Process>>#primitiveEnterCriticalSection."
	"self shouldIsolate ifTrue:
		[^ self forbiddenOperationForContext: aContext]."
	
	^ aBlock value