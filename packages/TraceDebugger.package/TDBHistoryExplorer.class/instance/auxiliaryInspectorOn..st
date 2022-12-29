private
auxiliaryInspectorOn: anObject

	^ (self tdbInspectorClass on: anObject cursor: self cursor)
		context: self context;
		yourself