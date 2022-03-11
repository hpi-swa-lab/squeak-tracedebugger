tests - exclusions
testExcludedMethodClassHierarchies

	filter excludedMethodClassHierarchies: {Number. Behavior}.
	self shouldExclude: Number >> #printOn:.
	self shouldExclude: Integer >> #printOn:.
	self shouldExclude: Behavior >> #printOn:.
	self shouldExclude: ClassDescription >> #printOn:.
	self shouldntExclude: Object >> #printOn:.
	self shouldntExclude: Exception >> #printOn:.
	
	filter reset.
	self shouldntExclude: Number >> #printOn:.
	self shouldntExclude: Integer >> #printOn:.
	self shouldntExclude: Behavior >> #printOn:.
	self shouldntExclude: ClassDescription >> #printOn:.