tests - enumerating
testPointsCollect

	| count copy |
	count := 0.
	copy := slice pointsCollect: [:ea | count := count + 1. {ea}].
	copy coalesceEqually.
	
	self assert: 6 equals: count.
	self assert: memory equals: copy memory.
	self assert: slice intervals equals: copy intervals.
	self assert: copy rawValues = {{1}. {object}. {3}}.