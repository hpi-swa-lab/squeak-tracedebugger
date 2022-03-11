tests - exclusions
testExcludedMethodClass

	filter excludedMethodClasses: {Object. Number}.
	self shouldExclude: Object >> #isNumber.
	self shouldExclude: Number >> #isNumber.
	self shouldntExclude: Time >> #addTime:.
	
	filter reset.
	self shouldntExclude: Object >> #isNumber.
	self shouldntExclude: Number >> #isNumber.