tests - primitives
testPrimitiveNew

	| size |
	simulator shouldIsolate: true.
	
	size := 10000000.
	self assert: size equals:
		(simulator evaluate: [(Array new: size) size]).