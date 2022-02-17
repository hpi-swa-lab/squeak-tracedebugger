tests
testRunToSelection

	| debugger index |
	debugger := self classUnderTest newOn:
		(Process forBlock: [TDBTestLogic new griffleMethodReturn]).
	
	debugger stepOver; stepInto.
	self should: debugger selectedContext selector = #griffleMethodReturn.
	
	index := debugger contents asString findString: 'wiffy2'.
	self should: index > 0.
	debugger runToSelection: (index to: index + 'wiffy2' size).
	
	debugger stepInto.
	self assert: #wiffy2 equals: debugger selectedContext selector.