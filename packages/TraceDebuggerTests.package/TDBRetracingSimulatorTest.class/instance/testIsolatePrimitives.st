tests
testIsolatePrimitives

	| semaphore |
	semaphore := Semaphore new.
	self shouldRaiseError:
		[simulator evaluate: [semaphore signal]].
	self deny: semaphore isSignaled.