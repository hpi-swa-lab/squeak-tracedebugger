tests - exclusions
testExcludedSelectors

	filter excludedSelectors: #(isNumber isBoolean).
	self shouldExclude: Object >> #isNumber.
	self shouldExclude: Object >> #isBoolean.
	self shouldntExclude: Object >> #isBehavior.
	
	filter reset.
	self shouldntExclude: Object >> #isNumber.
	self shouldntExclude: Object >> #isBoolean.