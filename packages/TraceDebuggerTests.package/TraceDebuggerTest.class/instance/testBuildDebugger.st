tests - ui
testBuildDebugger
	<timeout: 30 "seconds">

	self
		withMatrixOfPreferences: #(shouldReplaceInspectorsWithExplorers shouldShowContextStack shouldShowReturnValue extraDebuggerButtons)
		do: [self basicTestBuildDebugger].
	self
		withMatrixOfPreferences: #(shouldShowExceptionContexts)
		do: [self basicTestBuildDebugger].