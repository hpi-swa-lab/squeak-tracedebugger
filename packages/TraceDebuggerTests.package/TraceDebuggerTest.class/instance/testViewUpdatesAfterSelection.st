tests
testViewUpdatesAfterSelection

	self
		runDebuggerFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #griffle
			arguments: #())
		assertionsAndSteps:
			{#(griffle nil (griffle)).
			#(stepOver stepThrough).
			#(griffle 'wiffy1' (griffle (griffle:with: (griffle)))).
			#(stepThrough stepThrough).
			#(griffle 'wiffy2' (griffle (griffle:with: (griffle) (griffle)))).
			#(stepInto).
			#(wiffy2 '^ 3' (griffle (griffle:with: (griffle) (griffle (wiffy2)))) (() ('stack1' '3'))).
			{[:debugger | debugger
				selectContext: (debugger contextStack
					detect: [:ctx | ctx selector = #griffle:with:]);
				stepInto]}.
			#(griffle:with: '* anotherBlock value' (griffle (griffle:with: (griffle) (griffle (wiffy2)))) (() ('all temp vars' 'aBlock:*anotherBlock:*' 'stack3' '2'))).
			{[:debugger | debugger
				selectContext: (debugger contextStack
					detect: [:ctx | ctx selector = #griffle]);
				stepThrough]}.
			#(griffle '^ self griffle: [self wiffy1] with: [self wiffy2]' (griffle (griffle:with: (griffle) (griffle (wiffy2))))).
			{[:debugger | debugger selectContext:
				"select dead context"
				(debugger childContextsFor: debugger selectedContext) first]}.
			#(griffle:with: 'value' nil (() ('ThisContext size' '3'))).
			{[:debugger | debugger
				"select alive context"
				selectContext: debugger selectedContext sender]}.
			#(griffle 'griffle: [self wiffy1] with: [self wiffy2]' (griffle (griffle:with: (griffle) (griffle (wiffy2))))).
			{[:debugger | debugger
				"reselect context"
				selectContext: nil;
				selectContext: debugger interruptedContext]}.
			#(griffle '^ self griffle: [self wiffy1] with: [self wiffy2]' (griffle (griffle:with: (griffle) (griffle (wiffy2))))).
			{[:debugger | self currentEvent tdbWithShiftPressed becomeActiveDuring:
				"select context sender (shift + red)"
				[debugger treeSelectContext:
					(#(1 2 1) inject: debugger selectedContext into: [:ctx :idx |
						(debugger childContextsFor: ctx) at: idx])]]}.
			#(griffle 'wiffy2' nil)}.