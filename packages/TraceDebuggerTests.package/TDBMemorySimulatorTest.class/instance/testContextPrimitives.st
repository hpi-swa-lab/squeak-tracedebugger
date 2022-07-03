tests - primitives
testContextPrimitives

	| context |
	simulator shouldIsolate: true.
	
	context := thisContext copy.
	self assert: #(nil) equals: (context as: Array).
	
	"primitiveContextAt"
	simulator evaluate:
		[self assert: nil equals: context pop.
		self shouldRaiseError: [context pop]].
	self assert: #(nil) equals: (context as: Array).
	
	"primitiveClone"
	simulator := self newSimulator. "clear side effects"
	simulator shouldIsolate: true.
	simulator evaluate:
		[self assert: #(nil) equals: (context copy as: Array)].