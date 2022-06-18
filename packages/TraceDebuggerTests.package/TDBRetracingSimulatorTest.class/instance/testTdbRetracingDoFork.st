tests - primitives
testTdbRetracingDoFork

	self assert: 3 equals: (simulator evaluate: [thisContext tdbRetracingDoFork]).
	self assert: 3 equals: (simulator evaluate: [thisContext tdbRetracingDoFork: nil]).