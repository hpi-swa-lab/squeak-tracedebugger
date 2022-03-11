copying
postCopy

	super postCopy.
	
	excludedPackages := excludedPackages copy.
	excludedSystemCategories := excludedSystemCategories copy.
	excludedMethodClasses := excludedMethodClasses copy.
	excludedReceiverClasses := excludedReceiverClasses copy.
	excludedMessageCategories := excludedMessageCategories copy.
	excludedSelectors := excludedSelectors copy.