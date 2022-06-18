tests - enumerating
testCollect

	| count copy |
	count := 0.
	copy := slice collect: [:ea | count := count + 1. {ea}].
	
	self assert: 0 equals: count.
	self assert: memory equals: copy memory.
	self assert: slice intervals equals: copy intervals.
	self assert: {{1}. {object}. {3}} equals: copy rawValues.