tests
testJumpsWithFilters

	| debugger |
	debugger := self newDebuggerOn:
		(Process forBlock: [TDBTestLogic new plonk]).
	
	debugger stepOver; stepInto; stepOver; stepInto.
	self should: debugger selectedContext selector = #ziffy.
	
	debugger contextFilter excludeSelector: #plonk.
	
	debugger jumpToSender.
	self assert: self selector equals: debugger selectedContext selector.
	
	debugger jumpToCallee.
	self assert: #ziffy equals: debugger selectedContext selector.
	
	debugger contextFilter excludeSelector: #ziffy.
	
	debugger jumpToPresence.
	self assert: self selector equals: debugger selectedContext selector.