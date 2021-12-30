updating
changedDependent: aspect

	"Reset cached state"
	aspect
		caseOf:
			{[#contents] ->
				[contents := nil.
				self contents].
			[#currentCompiledMethod] ->
				[currentCompiledMethod := nil.
				self currentCompiledMethod.
				self decorateButtons].
			[#selectedContext] ->
				[selectedContext := self cursor context]}
		otherwise: [].
	
	self changed: aspect.
	
	aspect
		caseOf:
			{[#selectedContext] ->
				["Only trigger selection update if the change was not initiated the view"
				self changedDependent: #treeSelectedContextPath]}
		otherwise: [].