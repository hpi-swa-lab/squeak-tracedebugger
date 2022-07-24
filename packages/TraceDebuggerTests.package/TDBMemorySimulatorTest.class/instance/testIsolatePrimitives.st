tests
testIsolatePrimitives

	| semaphore |
	simulator shouldIsolate: true.
	
	semaphore := Semaphore new.
	self shouldRaiseError:
		[simulator evaluate: [semaphore signal]].
	self deny: semaphore isSignaled.