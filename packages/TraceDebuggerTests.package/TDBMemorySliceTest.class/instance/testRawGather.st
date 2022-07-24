tests - enumerating
testRawGather

	| copy |
	slice := self classUnderTest
		memory: memory
		intervals: {0 to: 1. 2 to: 2. 3 to: 4. 5 to: 6. 7 to: 8. 9 to: 9. 10 to: 10}
		rawValues:
			{{{0 to: 0. 1 to: 1}. {0. 0.5}}.
			2.
			{{3 to: 4}. {3.5}}.
			4.
			{{7 to: 7. 8 to: 8}. {7. 8.0}}.
			{{9 to: 9}. {8.0}}.
			 7}.
	
	copy := slice rawGather: [:rawValue |
		rawValue isArray ifFalse: [rawValue] ifTrue:
			[self classUnderTest
				memory: memory
				intervals: rawValue first
				rawValues: rawValue second]].
	
	self assert: {0 to: 0. 1 to: 1. 2 to: 2. 3 to: 4. 5 to: 6. 7 to: 7. 8 to: 9. 10 to: 10} equals: copy intervals.
	self assert: {0. 0.5. 2. 3.5. 4. 7. 8.0. 7} equals: copy rawValues.