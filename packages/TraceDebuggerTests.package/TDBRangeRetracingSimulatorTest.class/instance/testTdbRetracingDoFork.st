tests - primitives
testTdbRetracingDoFork

	self assert: #(0 1 2 3 4) equals: (simulator evaluate: [thisContext tdbRetracingDoFork]) values.
	self assert: 5 equals:
		((simulator evaluate: [thisContext tdbRetracingDoFork. thisContext simulator]) rawValues as: Set) size.
	
	self assert: #(2) equals:
		(simulator evaluate: [thisContext tdbRetracingDoFork: 2]) values.
	self assert: 1 equals:
		((simulator evaluate:
			[thisContext tdbRetracingDoFork: 2.
			thisContext simulator])
				rawValues as: Set) size.
	
	self assert: #(0 1 2) equals:
		((simulator evaluate: [thisContext tdbRetracingDoFork: thisContext tdbRetracingTimeIndex // 2])
			coalesceEqually;
			flag: #rangeRetracingGC;
			values).
	self assert: 3 equals:
		((simulator evaluate:
			[thisContext tdbRetracingDoFork: thisContext tdbRetracingTimeIndex // 2.
			thisContext simulator])
				rawValues as: Set) size.
	self assert: 4 equals:
		((simulator evaluate:
			[thisContext tdbRetracingDoForkAll:
				{thisContext tdbRetracingTimeIndex // 2.
				thisContext tdbRetracingTimeIndex // 3}.
			thisContext simulator])
				rawValues as: Set) size.