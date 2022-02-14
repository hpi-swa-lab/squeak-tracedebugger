tests
testFindContext

	| debugger selection |
	debugger := self classUnderTest newOn:
		(Process forBlock: [(TDBTestLogic doPlonk; new) plonkPlus]).
	
	3 timesRepeat: [debugger stepOver].
	self should: debugger selectedContext willReturn.
	
	[debugger findContext]
		valueSupplyingAnswer: #('*signature*' 'TDBTestLogic>>ziffy {as yet unclassified}').
	selection := debugger selectedContext.
	self assert: TDBTestLogic >> #ziffy equals: selection method.
	self assert: (selection findContextSuchThat: [:ctxt | ctxt selector = #doPlonk]) notNil.
	
	debugger findContextAgain.
	self deny: selection equals: debugger selectedContext.
	selection := debugger selectedContext.
	self assert: TDBTestLogic >> #ziffy equals: selection method.
	self assert: (selection findContextSuchThat: [:ctxt | ctxt selector = #plonkPlus]) notNil.
	
	debugger findContextAgain.
	self assert: selection equals: debugger selectedContext. "no more hit"