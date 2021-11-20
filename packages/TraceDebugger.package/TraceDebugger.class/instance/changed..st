updating
changed: aspect

	super changed: aspect.
	
	(self dependentAspectsOn: aspect)
		do: [:dependentAspect | self changedDependent: dependentAspect].
	
	aspect
		caseOf:
			{[#currentCompiledMethod] -> [self currentCompiledMethod].
			[#selectedContext] -> [self updateInspectors]}
		otherwise: [].