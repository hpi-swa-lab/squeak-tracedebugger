accessing
childContextsFor: aContext

	^ (childContexts ifNil: [childContexts := SimPluggableWeakKeyDictionary new
		equalBlock: [:someContext :someOtherContext | someContext tdbIdentical: someOtherContext];
		hashBlock: [:someContext | someContext identityHash];
		yourself]) at: aContext ifAbsentPut: [
			self flag: #coroutines. "There might be contexts that refer aContext as their sender but are not amongst its traces' children."
			"^ self cursor allCaleesOf: aContext"
	
			self cursor childContextsFor: aContext]