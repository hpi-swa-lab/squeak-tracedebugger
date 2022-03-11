private
pluralSelectorFor: property

	^ property caseOf:
		{[#package] -> [#packages].
		[#systemCategory] -> [#systemCategories].
		[#methodClass] -> [#methodClasses].
		[#methodClassHierarchy] -> [#methodClassHierarchies].
		[#receiverClass] -> [#receiverClasses].
		[#messageCategory] -> [#messageCategories].
		[#selector] -> [#selectors]}