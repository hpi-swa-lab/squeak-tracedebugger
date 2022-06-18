tests - enumerating
testWithRawCollect

	| second copy |
	second := self classUnderTest
		memory: memory
		intervals: {1 to: 2. 3 to: 4. 5 to: 5. 6 to: 6}
		rawValues: {1. 2. 3. object}.
	
	copy := slice with: second rawCollect: [:eachLeft :eachRight | {eachLeft. eachRight}].
	
	self assert: memory equals: copy memory.
	self assert: {1 to: 2. 3 to: 3. 4 to: 4. 5 to: 5. 6 to: 6} equals: copy intervals.
	self assert: {{1. 1}. {1. 2}. {object. 2}. {3. 3}. {3. object}} equals: copy rawValues.