updating
updateRootContexts

	| newRootContexts |
	newRootContexts := {self contextStack last}.
	
	rootContexts = newRootContexts ifFalse: [
		rootContexts := newRootContexts.
		self changed: #rootContexts].