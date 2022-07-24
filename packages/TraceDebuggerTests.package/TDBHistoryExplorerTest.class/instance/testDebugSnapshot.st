tests
testDebugSnapshot

	| debugger |
	self newExplorer: [cursor exploreHistory: logic expression: '{yin}'].
	
	explorer selectContextSlice: (self contextSliceAtPath: #(1 2 1)).
	self newWindow: [(debugger := explorer debugSnapshot) containingWindow].
	
	self assert: debugger selectedContext isSimulationContext.
	debugger stepOver.
	self assert: debugger selectedContext top printString equals: '#(1)'.