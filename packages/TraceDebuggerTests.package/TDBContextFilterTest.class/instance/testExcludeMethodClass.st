tests - exclusions
testExcludeMethodClass

	filter excludeMethodClass: Object.
	self shouldExclude: Object >> #isNumber.
	self shouldntExclude: Number >> #isNumber.