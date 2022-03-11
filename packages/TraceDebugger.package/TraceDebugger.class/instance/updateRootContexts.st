updating
updateRootContexts

	| newRootContexts |
	newRootContexts := {self contextStack
		ifEmpty: [self interruptedContext]
		ifNotEmpty: [:stack | stack last]}.
	
	rootContexts = newRootContexts ifFalse: [
		rootContexts := newRootContexts.
		self changed: #rootContexts].