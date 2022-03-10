inspector compatibility
modelWakeUpIn: aWindow

	((aWindow valueOfProperty: #tdbModelsInitializedInView ifAbsentPut: [Set new]) includes: self)
		ifFalse:
			[(aWindow valueOfProperty: #tdbModelsInitializedInView) add: self.
			self changed: #expandRootsRequested].
	
	^ super modelWakeUpIn: aWindow