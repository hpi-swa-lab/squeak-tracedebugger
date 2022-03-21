updating
changed: aspect

	super changed: aspect.
	
	(self dependentAspectsOn: aspect)
		do: [:dependentAspect | self changedDependent: dependentAspect].
	
	aspect
		caseOf:
			{[#borderContexts] -> [self updateRootContexts].
			[#contextStack] -> [self updateRootContexts].
			[#inspectors] -> [self updateInspectors]}
		otherwise: [].