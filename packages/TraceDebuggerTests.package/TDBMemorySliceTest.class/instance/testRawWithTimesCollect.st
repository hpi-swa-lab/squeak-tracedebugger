tests - enumerating
testRawWithTimesCollect

	| copy |
	copy := slice rawWithTimesCollect: [:ea :times | {ea. times}].
	
	self assert: memory equals: copy memory.
	self assert: slice times equals: copy times.
	self assert: {{1. 1 to: 3}. {object. 4 to: 4}. {3. 5 to: 6}} equals: copy rawValues.