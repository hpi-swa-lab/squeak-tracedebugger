initialize-release
initialize

	super initialize.
	
	excludedPackages := Set new.
	excludedSystemCategories := Set new.
	excludedMethodClasses := Set new.
	excludedMethodClassHierarchies := Set new.
	excludedReceiverClasses := Set new.
	excludedMessageCategories := Set new.
	excludedSelectors := Set new.