tests - exclusions
testExcludeSystemCategory

	filter excludeSystemCategory: 'Kernel-Objects'.
	self shouldExclude: Object >> #isNumber.
	self shouldntExclude: Number >> #isNumber.