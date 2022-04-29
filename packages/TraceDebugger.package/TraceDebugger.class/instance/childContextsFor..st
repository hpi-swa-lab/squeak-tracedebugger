accessing - context
childContextsFor: aContext

	thisContext wrap: [:block | self computeViewProperty: block ifError: [#()]].
	
	^ (childContexts ifNil: [childContexts := SimPluggableWeakKeyDictionary new
		equalBlock: [:someContext :someOtherContext | someContext tdbIdentical: someOtherContext];
		hashBlock: [:someContext | someContext identityHash];
		yourself]) at: aContext ifAbsentPut: [
			self cursor childContextsFor: aContext]