controlling
context: aContext doPrimitive: primitiveIndex method: aCompiledMethod receiver: receiver args: arguments do: aBlock

	| result |
	result := super
		context: aContext
		doPrimitive: primitiveIndex
		method: aCompiledMethod
		receiver: receiver
		args: arguments
		do: aBlock.
	
	((primitiveIndex >= 200 and: [primitiveIndex <= 209]) and: [(aContext isPrimFailToken: result) not]) ifTrue:
		["closure primitive"
		self assert: result isClosureContext.
		memory object: result priorTo: timeIndex instVarAt: 2 "pc" put: nil. "make #isDead answer false for not-yet executed contexts"].
	
	^ result