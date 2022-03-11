tests
testJumps

	| debugger |
	debugger := self newDebuggerOn:
		(Process forBlock: [TDBTestLogic new plonk]).
	
	debugger stepOver; stepInto; stepOver; stepInto.
	self should: debugger selectedContext selector = #ziffy.
	
	debugger jumpToSender.
	self assert: #plonk equals: debugger selectedContext selector.
	
	debugger jumpToCallee.
	self assert: #ziffy equals: debugger selectedContext selector.
	
	self shouldFlash: [debugger jumpToCallee].
	self assert: #ziffy equals: debugger selectedContext selector.
	
	debugger selectContext: ((debugger childContextsFor: debugger selectedContext sender) first).
	self should: debugger selectedContext selector = #wiffy.
	debugger jumpToCallee.
	self assert: #wiffy2 equals: debugger selectedContext selector.
	
	debugger jumpToPresence.
	self assert: #ziffy equals: debugger selectedContext selector.