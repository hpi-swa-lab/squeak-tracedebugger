initialize-release
setSideEffects: memories

	self assert: memories size = intervals size.
	sideEffects := memories.