accessing
totalExcludedCount

	^ {self excludedPackages. self excludedSystemCategories. self excludedMethodClasses. self excludedReceiverClasses. self excludedMessageCategories. self excludedSelectors}
		detectSum: #size