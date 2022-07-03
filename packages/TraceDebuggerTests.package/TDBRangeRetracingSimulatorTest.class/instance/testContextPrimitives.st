tests - primitives
testContextPrimitives

	| context |
	memory := self memoryClass new.
	simulator memory: memory.
	simulator timeIndices: (1 to: 3).
	
	context := thisContext copy.
	self assert: #(nil) equals: (context as: Array).
	memory
		object: context priorTo: 2 instVarAt: 3 "stackp" put: 2;
		object: context priorTo: 3 instVarAt: 3 "stackp" put: 3.
	memory
		object: context priorTo: 3 fieldAt: 1 put: nil;
		object: context priorTo: 3 fieldAt: 2 put: 1;
		object: context priorTo: 3 fieldAt: 3 put: 2.
	
	"primitiveContextAt"
	simulator evaluate:
		[self
			assert: (#(1 2 nil) at: thisContext tdbRetracingTimeIndex)
			equals: context pop.
		self
			assert: (#(nil 1 0) at: thisContext tdbRetracingTimeIndex)
			equals: ([context pop] ifError: [0])].
	self assert: #(nil) equals: (context as: Array).
	
	"primitiveClone"
	simulator evaluate:
		[self
			assert: (#((nil 1) (nil 1 2) (nil)) at: thisContext tdbRetracingTimeIndex)
			equals: (context copy as: Array)].