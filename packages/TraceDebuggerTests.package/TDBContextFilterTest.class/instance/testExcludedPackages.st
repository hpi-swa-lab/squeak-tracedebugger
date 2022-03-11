tests - exclusions
testExcludedPackages

	filter excludedPackages: #('Kernel' 'Collections').
	self shouldExclude: Object >> #isNumber.
	self shouldntExclude: Time >> #addTime:.
	
	filter reset.
	self shouldntExclude: Object >> #isNumber.