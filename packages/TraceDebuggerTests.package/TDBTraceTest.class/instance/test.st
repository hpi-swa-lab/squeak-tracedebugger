tests
test

	| context process semaphore trace |
	semaphore := Semaphore new.
	process := [Processor activeProcess suspend]
		forkAt: Processor activePriority + 1.
	self should: process isSuspended.
	context := process suspendedContext.
	
	trace := self classUnderTest forContext: context.
	
	self assert: (trace contextAtTime: 0) = context.
	self assert: (trace memory object: self atTime: 0) = self.