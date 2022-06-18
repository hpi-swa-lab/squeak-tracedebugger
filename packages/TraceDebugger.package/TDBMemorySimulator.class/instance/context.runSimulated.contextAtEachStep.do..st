controlling
context: aContext runSimulated: aBlock contextAtEachStep: anotherBlock do: simulateBlock
	<tdbRequiredIf: #shouldIsolate>

	self shouldIsolate ifFalse: [^ super context: aContext runSimulated: aBlock contextAtEachStep: anotherBlock do: simulateBlock].
	
	"Prevent optimization with ensure variable in super by never passing a zero-arg block. Reason: The variable would be only modified within the memory, and the simulation would never end."
	^ super
		context: aContext
		runSimulated: aBlock
		contextAtEachStep: [:context | anotherBlock cull: context]
		do: simulateBlock