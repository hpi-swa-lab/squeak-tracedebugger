updating
changed: aspect

	super changed: aspect.
	
	(self dependentAspectsOn: aspect)
		do: [:dependentAspect | self changedDependent: dependentAspect].
	
	aspect
		caseOf:
			{[#bottomContexts] -> [self updateRootContexts].
			[#contextStack] -> [self updateRootContexts].
			[#cursorPosition] -> [self updateInspectors]}
		otherwise: [].