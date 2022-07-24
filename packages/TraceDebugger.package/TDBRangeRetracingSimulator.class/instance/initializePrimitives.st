initialize-release
initializePrimitives

	super initializePrimitives.
	
	self flag: #optimize. "Class-side cache"
	primitiveNumArgs := Array new: 575.
	self primitivePragmas
		select: [:pragma | pragma keyword = #simPrimitive:]
		thenDo: [:pragma |
			| index selector |
			index := pragma argumentAt: 1.
			selector := pragma selector.
			primitiveNumArgs at: index put: selector numArgs - 3 "#(context: receiver: do:) size"].