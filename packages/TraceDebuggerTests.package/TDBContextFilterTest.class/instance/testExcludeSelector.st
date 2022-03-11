tests - exclusions
testExcludeSelector

	filter excludeSelector: #isNumber.
	self shouldExclude: Object >> #isNumber.
	self shouldntExclude: Object >> #isBoolean.