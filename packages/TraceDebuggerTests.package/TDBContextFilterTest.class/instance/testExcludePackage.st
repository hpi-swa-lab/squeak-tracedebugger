tests - exclusions
testExcludePackage

	filter excludePackage: 'Kernel'.
	self shouldExclude: Object >> #isNumber.
	self shouldntExclude: Collection >> #select:.