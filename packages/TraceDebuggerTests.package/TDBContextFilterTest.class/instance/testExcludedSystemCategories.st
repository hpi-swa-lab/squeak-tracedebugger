tests - exclusions
testExcludedSystemCategories

	filter excludedSystemCategories: #('Kernel-Objects' 'Kernel-Numbers').
	self shouldExclude: Object >> #isNumber.
	self shouldExclude: Number >> #isNumber.
	self shouldntExclude: Behavior >> #isBehavior.
	
	filter reset.
	self shouldntExclude: Object >> #isNumber.
	self shouldntExclude: Number >> #isNumber.