tests - ui
testBuildDebugger
	<timeout: 30 "seconds"> "updating many open debuggers might be costly"

	self
		withMatrixOfPreferences: #(shouldReplaceInspectorsWithExplorers shouldShowContextStack shouldShowReturnValue extraDebuggerButtons)
		do: [self basicTestBuildDebugger].