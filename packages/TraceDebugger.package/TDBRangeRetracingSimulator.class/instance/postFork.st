forking
postFork

	sideEffects := sideEffects copy.
	ownObjects := ownObjects copyEmpty.
	self initializeAllPrimitives. "update receiver of closures"
	allVectors := allVectors. "shared"
	contextCopies := contextCopies copy.