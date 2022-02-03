tests
testFindClass

	| debugger selection |
	debugger := self classUnderTest newOn:
		(Process forBlock: [TDBTestLogic doPlonk]).
	
	debugger stepOver.
	self should: debugger selectedContext willReturn.
	
	[debugger findClass]
		valueSupplyingAnswer: #('*class*' 'TDBTestLogic class').
	selection := debugger selectedContext.
	self assert: TDBTestLogic class >> #doPlonk equals: selection method.
	self assert: (selection findContextSuchThat: [:ctxt | ctxt selector = #doPlonk]) notNil.
	
	debugger findClassAgain.
	self assert: selection equals: debugger selectedContext. "no more hit"
	
	
	[debugger findClass]
		valueSupplyingAnswer: #('*class*' 'TDBTestLogic').
	#(plonk wiffy wiffy2 ziffy) do: [:selector |
		self deny: selection equals: debugger selectedContext.
		selection := debugger selectedContext.
		self assert: TDBTestLogic >> selector equals: selection method.
		
		debugger findClassAgain].
	self assert: selection equals: debugger selectedContext. "no more hit"