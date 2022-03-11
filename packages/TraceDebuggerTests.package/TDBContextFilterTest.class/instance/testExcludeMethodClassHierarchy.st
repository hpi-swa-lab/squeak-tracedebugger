tests - exclusions
testExcludeMethodClassHierarchy

	filter excludeMethodClassHierarchy: Number.
	self shouldExclude: Number >> #printOn:.
	self shouldExclude: Integer >> #printOn:.
	self shouldntExclude: Object >> #printOn:.
	self shouldntExclude: Behavior >> #printOn:.