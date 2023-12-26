tests - ui
testBuildDebugger
	<timeout: 45 "seconds">

	self
		withMatrixOfPreferences: #(shouldReplaceInspectorsWithExplorers shouldShowContextStack shouldShowReturnValue extraDebuggerButtons)
		do: [self basicTestBuildDebugger].
	self
		withMatrixOfPreferences: #(shouldShowExceptionContexts)
		do: [self basicTestBuildDebugger].