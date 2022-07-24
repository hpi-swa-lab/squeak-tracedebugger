tests
testTdbFullStack

	| context process semaphore stack |
	semaphore := Semaphore new.
	process := [Processor activeProcess suspend]
		forkAt: Processor activePriority + 1.
	self should: process isSuspended.
	context := process suspendedContext.
	
	stack := context tdbFullStack.
	
	self assert: context stack asArray equals: stack asArray.