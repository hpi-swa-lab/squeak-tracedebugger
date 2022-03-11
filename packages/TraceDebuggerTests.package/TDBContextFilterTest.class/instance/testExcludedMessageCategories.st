tests - exclusions
testExcludedMessageCategories

	filter excludedMessageCategories: #('copying' 'testing').
	self shouldExclude: Object >> #copy.
	self shouldExclude: Object >> #isNumber.
	self shouldntExclude: Object >> #printOn:.
	
	filter reset.
	self shouldntExclude: Object >> #copy.
	self shouldntExclude: Object >> #isNumber.