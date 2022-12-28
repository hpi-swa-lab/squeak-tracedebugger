tests
testViewUpdatesStateCentricStepping

	self
		runDebuggerFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #doYinYang
			arguments: #())
		assertionsAndSteps:
			{#(doYinYang nil (doYinYang)).
			(Array new: 5 withAll: #stepOver).
			#(doYinYang 'mixYinYang' (doYinYang (yin:) (yang:) (fixUpYinYang (asInteger) (yang:)) (rearrangeYinYang (yin:) (yang:)))).
			#(restart).
			#(doYinYang 'yin: 1' (doYinYang ...)).
			
			{[:debugger | debugger receiverInspector selectFieldNamed: 'all inst vars']}.
			#(doYinYang 'yin: 1' (doYinYang ...) (('all inst vars' 'yin:*nil*yang:*nil*'))).
			{[:debugger | debugger receiverInspector stepToNextChange]}.
			#(yin: '' (doYinYang ...) (('all inst vars' 'yin:*1*yang:*nil*') ('anObject' '1'))).
			{[:debugger | debugger receiverInspector stepToNextChange]}.
			#(yang: '' (doYinYang ...) (('all inst vars' 'yin:*1*yang:*2.2*') ('anObject' '2.2'))).
			{[:debugger | debugger receiverInspector stepToNextChange]}.
			#(yang: '' (doYinYang ...) (('all inst vars' 'yin:*1*yang:*2*') ('anObject' '2'))).
			
			{[:debugger | debugger receiverInspector stepToPreviousChange]}.
			#(yang: ':= anObject' (doYinYang ...) (('all inst vars' 'yin:*1*yang:*2.2*') ('anObject' '2'))).
			{[:debugger | debugger receiverInspector stepToPreviousChange]}.
			#(yang: ':= anObject' (doYinYang ...) (('all inst vars' 'yin:*1*yang:*nil*') ('anObject' '2.2'))).
			{[:debugger |
				[debugger receiverInspector stepToChange]
					valueSupplyingAnswer: #('*changes*' #(provideIndex 6))]}.
			#(yang: '' (doYinYang ...) (('all inst vars' 'yin:*2*yang:*1*') ('anObject' '1'))).
			{[:debugger |
				[debugger receiverInspector stepToChange]
					valueSupplyingAnswer: #('*changes*' #(provideIndex 2))]}.
			#(yin: '' (doYinYang ...) (('all inst vars' 'yin:*1*yang:*nil*') ('anObject' '1'))).
			{[:debugger |
				[debugger receiverInspector stepToChange]
					valueSupplyingAnswer: #('*changes*' #(provideIndex 2))]}.
			#(yin: '' (doYinYang ...) (('all inst vars' 'yin:*1*yang:*nil*') ('anObject' '1'))).
			{[:debugger |
				[debugger receiverInspector stepToChange]
					valueSupplyingAnswer: #('*changes*' #(provideIndex 1))]}.
			#(yin: ':= anObject' (doYinYang ...) (('all inst vars' 'yin:*nil*yang:*nil*') ('anObject' '1'))).
			
			{[:debugger | debugger receiverInspector stepToPreviousChange]}.
			#(yin: ':= anObject' (doYinYang ...) (('all inst vars' 'yin:*nil*yang:*nil*') ('anObject' '1'))).
			{[:debugger | debugger receiverInspector stepToPreviousChange]}.
			#(yin: ':= anObject' (doYinYang ...) (('all inst vars' 'yin:*nil*yang:*nil*') ('anObject' '1'))).
			{[:debugger |
				[debugger receiverInspector stepToChange]
					valueSupplyingAnswer: #('*changes*' #(provideIndex 6))]}.
			#(yang: '' (doYinYang ...) (('all inst vars' 'yin:*2*yang:*1*') ('anObject' '1'))).
			{[:debugger | debugger receiverInspector stepToNextChange]}.
			#(yang: '' (doYinYang ...) (('all inst vars' 'yin:*2*yang:*1*') ('anObject' '1'))).
			{[:debugger | debugger receiverInspector stepToNextChange]}.
			#(yang: '' (doYinYang ...) (('all inst vars' 'yin:*2*yang:*1*') ('anObject' '1')))}.