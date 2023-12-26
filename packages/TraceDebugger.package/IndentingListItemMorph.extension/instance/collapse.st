*TraceDebugger-UI-container protocol-override
collapse

	self isExpanded ifFalse: [^ self].
	
	self isExpanded: false.
	
	firstChild ifNotNil: [:collapsingNode |
	 	| toDelete |
		toDelete := OrderedCollection new.
		collapsingNode withSiblingsDo: [:aNode | aNode recursiveAddTo: toDelete].
		container noteRemovalOfAll: toDelete.
		firstChild := nil].
	
	container noteCollapseOf: self. "<-- TraceDebugger"