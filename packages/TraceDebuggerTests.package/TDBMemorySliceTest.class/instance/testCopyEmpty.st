tests - copying
testCopyEmpty

	| copy |
	copy := slice copyEmpty.
	
	self assert: memory equals: copy memory.
	self assert: copy intervals isEmpty.
	self assert: copy rawValues isEmpty.
	self assert: copy sideEffects isEmpty.