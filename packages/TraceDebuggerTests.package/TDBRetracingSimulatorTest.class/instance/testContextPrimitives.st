tests - primitives
testContextPrimitives

	| context |
	memory := self memoryClass new.
	simulator memory: memory.
	simulator timeIndex: 1.
	
	context := thisContext copy.
	self assert: #(nil) equals: (context as: Array).
	memory
		object: context priorTo: 2 instVarAt: 3 "stackp" put: 2;
		object: context priorTo: 2 fieldAt: 2 put: 1.
	
	"primitiveContextAt"
	simulator evaluate:
		[self assert: 1 equals: context pop.
		self assert: nil equals: context pop.
		self shouldRaiseError: [context pop]].
	self assert: #(nil) equals: (context as: Array).
	
	"primitiveClone"
	simulator := self newSimulator. "clear side effects"
	simulator memory: memory.
	simulator timeIndex: 1.
	simulator evaluate:
		[self assert: #(nil 1) equals: (context copy as: Array)].