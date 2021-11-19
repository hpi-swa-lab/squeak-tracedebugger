testing
testTdbStack

	| context process semaphore stack |
	semaphore := Semaphore new.
	process := [Processor activeProcess suspend]
		forkAt: Processor activePriority + 1.
	self assert: process isSuspended.
	context := process suspendedContext.
	
	stack := context tdbStack.
	
	self assert: context stack asArray equals: stack contents asArray.