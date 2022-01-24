tests
testSimpleSend

	| timeZero oldPlonk newPlonk simulator |
	timeZero := 10.
	oldPlonk := object plonk.
	newPlonk := 3.
	simulator := self classUnderTest forMemory: memory atTime: timeZero.
	
	simulator evaluate: [object plonk: newPlonk].
	
	self assert: newPlonk equals: object plonk.
	self assert: simulator timeIndex > timeZero.
	self assert: object plonkPlusGriffle equals:
		(simulator evaluate: [object plonkPlusGriffle]).
	
	self assert: #absent equals:
		(memory object: object atTime: simulator timeIndex instVarAt: 1 ifAbsent: [#absent]).
	self assert: oldPlonk equals:
		(memory object: object atTime: timeZero instVarAt: 1 ifAbsent: [self fail]).