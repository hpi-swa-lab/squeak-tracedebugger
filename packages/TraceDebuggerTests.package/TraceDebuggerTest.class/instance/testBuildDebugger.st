tests - ui
testBuildDebugger
	<timeout: 60 "seconds"> "updating many open debuggers might be costly"

	self
		withMatrixOfPreferences: #(shouldReplaceInspectorsWithExplorers shouldShowContextStack shouldShowReturnValue extraDebuggerButtons)
		do: [self basicTestBuildDebugger].
	self
		withMatrixOfPreferences: #(shouldShowExceptionContexts)
		do: [self basicTestBuildDebugger].