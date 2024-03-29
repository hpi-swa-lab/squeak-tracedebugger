tests
testFindContext

	| debugger selection |
	debugger := self newDebuggerOn:
		(Process forBlock: [(TDBTestLogic doPlonk; new) plonkPlus]).
	
	3 timesRepeat: [debugger stepOver].
	self should: debugger selectedContext willReturn.
	
	self shouldntFlash:
		[[debugger findContext]
			valueSupplyingAnswer: #('*signature*' 'TDBTestLogic>>ziffy {the ziffy category}')].
	selection := debugger selectedContext.
	self assert: TDBTestLogic >> #ziffy equals: selection method.
	self assert: (selection findContextSuchThat: [:ctxt | ctxt selector = #doPlonk]) notNil.
	
	self shouldntFlash: [debugger findContextAgain].
	self deny: selection equals: debugger selectedContext.
	selection := debugger selectedContext.
	self assert: TDBTestLogic >> #ziffy equals: selection method.
	self assert: (selection findContextSuchThat: [:ctxt | ctxt selector = #plonkPlus]) notNil.
	
	self shouldFlash: [debugger findContextAgain].
	self assert: selection equals: debugger selectedContext. "no more hit"