tests
testViewBorder

	self
		runDebuggerFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonk
			arguments: #())
		assertionsAndSteps:
			{#(plonk nil (plonk ())).
			#(stepInto stepInto).
			#(wiffy nil (plonk (wiffy ()))).
			
			"add first border"
			#(toggleBorderContext).
			#(wiffy nil (wiffy ())).
			#(stepOver stepInto).
			#(wiffy2 nil (wiffy (wiffy2 ()))).
			
			"add second border"
			#(toggleBorderContext).
			#(wiffy2 nil (wiffy2 ())).
			"stepping out will dismiss the second border"
			#(stepOver).
			#(wiffy nil (wiffy (wiffy2 ()))).
			"the border will not return"
			#(restart stepOver stepInto).
			#(wiffy2 nil (wiffy (wiffy2 ()))).
			
			"remove first border"
			{[:debugger | debugger toggleBorderContext: debugger selectedContext sender]}.
			#(wiffy2 nil (plonk (wiffy (wiffy2 ()))))}