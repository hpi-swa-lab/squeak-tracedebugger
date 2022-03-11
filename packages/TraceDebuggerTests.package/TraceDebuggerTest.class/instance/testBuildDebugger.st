tests - ui
testBuildDebugger
	<timeout: 15 "seconds"> "updating many open debuggers might be costly"

	self
		withMatrixOfPreferences: #(shouldReplaceInspectorsWithExplorers shouldShowContextStack shouldShowReturnValue)
		do: [self testBuildDebugger].