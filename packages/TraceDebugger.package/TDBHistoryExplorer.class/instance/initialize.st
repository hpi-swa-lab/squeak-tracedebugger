initialize-release
initialize

	super initialize.
	
	self basicExpression: self defaultExpression.
	self representationMode: self defaultRepresentationMode.
	self shouldContractPaths: self defaultShouldContractPaths.
	self shouldShrinkColumns: self defaultShouldShrinkColumns.
	self contextLabelCompactionStrategy: self defaultContextLabelCompactionStrategy.
	
	expanded := Set new.