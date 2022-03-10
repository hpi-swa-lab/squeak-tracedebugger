field list menu
browseClassRefs

	self selectedClass ifNotNil: [:class |
		class isTrait ifFalse: [self systemNavigation browseAllCallsOnClass: class]].