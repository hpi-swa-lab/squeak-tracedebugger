tests
testNoIsolatePrimitives

	| semaphore |
	semaphore := Semaphore new.
	self assert: semaphore equals:
		(simulator evaluate: [semaphore signal]).
	self assert: semaphore isSignaled.