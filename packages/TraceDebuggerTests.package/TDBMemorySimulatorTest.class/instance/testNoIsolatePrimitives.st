tests
testNoIsolatePrimitives

	| semaphore |
	simulator shouldIsolate: false.
	
	semaphore := Semaphore new.
	self assert: semaphore equals:
		(simulator evaluate: [semaphore signal]).
	self assert: semaphore isSignaled.