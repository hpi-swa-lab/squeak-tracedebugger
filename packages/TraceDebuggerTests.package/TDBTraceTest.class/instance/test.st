tests
test

	| context process semaphore trace |
	semaphore := Semaphore new.
	process := [Processor activeProcess suspend]
		forkAt: Processor activePriority + 1.
	self assert: process isSuspended.
	context := process suspendedContext.
	
	trace := self classUnderTest forContext: context.
	
	self assert: (trace contextAtTime: 1) = context.
	self assert: (trace object: self atTime: 1) = self.