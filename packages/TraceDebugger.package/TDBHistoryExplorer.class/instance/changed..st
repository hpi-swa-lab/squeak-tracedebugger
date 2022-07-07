updating
changed: aspect

	super changed: aspect.
	
	(self dependentAspectsOn: aspect)
		do: [:dependentAspect | self changedDependent: dependentAspect].
	
	aspect
		caseOf:
			{[#updateMemorySlice] -> [self updateMemorySlice].
			[#updateContextTreeSlice] -> [self updateContextTreeSlice]}
		otherwise: [].