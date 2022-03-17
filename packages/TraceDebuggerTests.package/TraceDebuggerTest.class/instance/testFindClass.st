tests
testFindClass

	| debugger selection |
	debugger := self newDebuggerOn:
		(Process forBlock: [TDBTestLogic doPlonk]).
	
	debugger stepOver.
	self should: debugger selectedContext willReturn.
	
	self shouldntFlash:
		[[debugger findClass]
			valueSupplyingAnswer: {'*class*'. TDBTestLogic class}].
	selection := debugger selectedContext.
	self assert: TDBTestLogic class >> #doPlonk equals: selection method.
	self deny: (selection findContextSuchThat: [:ctxt | ctxt selector = #doPlonk]) isNil.
	
	self shouldFlash: [debugger findClassAgain].
	self assert: selection equals: debugger selectedContext. "no more hit"
	
	
	self shouldntFlash:
		[[debugger findClass]
			valueSupplyingAnswer: {'*class*'. TDBTestLogic}].
	#(plonk wiffy wiffy2 ziffy) do: [:selector |
		self deny: selection equals: debugger selectedContext.
		selection := debugger selectedContext.
		self assert: TDBTestLogic >> selector equals: selection method.
		
		debugger findClassAgain].
	self assert: selection equals: debugger selectedContext. "no more hit"