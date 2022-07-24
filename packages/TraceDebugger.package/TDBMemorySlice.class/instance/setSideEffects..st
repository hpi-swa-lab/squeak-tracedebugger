initialize-release
setSideEffects: memories

	memories ifNotNil:
		[self assert: memories size = intervals size].
	sideEffects := memories.