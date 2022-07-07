private
auxiliaryInspectorOn: anObject

	^ (self tdbInspectorClass on: anObject)
		context: self context;
		yourself