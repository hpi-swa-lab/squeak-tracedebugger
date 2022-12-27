tests
testSpawn

	| process firstDebugger context secondDebugger |
	firstDebugger := self newDebuggerOn:
		(process := Process forBlock: [TDBTestLogic doPlonk]).
	
	firstDebugger stepInto; stepOver; stepInto.
	firstDebugger stepOver; stepInto; stepBack; stepBack.
	firstDebugger stepInto; stepOver.
	self should: firstDebugger selectedContext selector = #wiffy.
	self should: firstDebugger selectedContext willReallySend.
	self should: firstDebugger isDisplayingHistory.
	context := (firstDebugger childContextsFor: (firstDebugger selectedContext sender)) second.
	self should: context selector = #ziffy.
	
	secondDebugger :=
		(self newWindow:
			[firstDebugger spawnContext: context])
				model.
	
	self assert: #wiffy equals: firstDebugger selectedContext selector.
	self assert: firstDebugger selectedContext willReallySend.
	self assert: firstDebugger isDisplayingHistory.
	self assert: #ziffy equals: secondDebugger selectedContext selector.
	self assert: secondDebugger selectedContext willReallySend.
	self deny: secondDebugger isDisplayingHistory.
	
	firstDebugger stepInto.
	self assert: #wiffy2 equals: firstDebugger selectedContext selector.
	self assert: firstDebugger isDisplayingHistory.
	self assert: #ziffy equals: secondDebugger selectedContext selector.
	self assert: secondDebugger selectedContext willReallySend.
	self deny: secondDebugger isDisplayingHistory.
	
	secondDebugger stepOver.
	self assert: #wiffy2 equals: firstDebugger selectedContext selector.
	self assert: firstDebugger isDisplayingHistory.
	self assert: #ziffy equals: secondDebugger selectedContext selector.
	self assert: secondDebugger selectedContext willReturn.
	self deny: secondDebugger isDisplayingHistory.
	
	"Abandon: The process is terminated when the last debugger is abandoned"
	firstDebugger abandon.
	secondDebugger stepOver.
	self assert: #plonk equals: secondDebugger selectedContext selector.
	self deny: process isTerminated.
	
	secondDebugger abandon.
	self assert: process isTerminated.