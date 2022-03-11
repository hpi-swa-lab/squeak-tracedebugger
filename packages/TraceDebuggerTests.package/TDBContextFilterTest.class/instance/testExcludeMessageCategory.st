tests - exclusions
testExcludeMessageCategory

	filter excludeMessageCategory: 'testing'.
	self shouldExclude: Object >> #isNumber.
	self shouldntExclude: Object >> #copy.