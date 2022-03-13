tests
testViewFilter

	self
		runDebuggerFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonk
			arguments: #())
		assertionsAndSteps:
			{#(plonk nil (plonk)).
			"Trace entire method"
			#(stepOver stepOver stepOver stepOver).
			#(plonk nil (plonk (wiffy (wiffy2)) (ziffy))).
			
			"Add message filter"
			{[:debugger | debugger selectContext:
				(debugger childContextsFor: debugger selectedContext) first].
			[:debugger |
				self
					invokeMenu: [:menu | debugger contextAddFilterMenu: menu]
					matching: '*"wiffy"*']}.
			#(plonk nil (plonk (wiffy2) (ziffy))).
			
			"Add message category filter"
			{[:debugger | debugger selectContext:
				(debugger childContextsFor: debugger selectedContext) second].
			[:debugger |
				self
					invokeMenu: [:menu | debugger contextAddFilterMenu: menu]
					matching: '*"the ziffy category"*']}.
			#(plonk nil (plonk (wiffy2))).
			
			"Remove message filter"
			{[:debugger |
				[self
					invokeMenu: [:menu | debugger contextEditFilterMenu: menu]
					matching: 'Filter messages*']
						valueSupplyingAnswer: #('*excluded messages*' #())]}.
			#(plonk nil (plonk (wiffy (wiffy2)))).
			
			"Reset all filters"
			{[:debugger |
				[self
					invokeMenu: [:menu | debugger contextEditFilterMenu: menu]
					matching: 'Reset*']
						valueSupplyingAnswer: #('*remove*1 filter*' true)]}.
			#(plonk nil (plonk (wiffy (wiffy2)) (ziffy)))}