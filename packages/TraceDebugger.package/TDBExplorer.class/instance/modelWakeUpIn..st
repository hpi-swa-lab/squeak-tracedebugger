inspector compatibility
modelWakeUpIn: window

	(window respondsTo: #valueOfProperty:ifAbsentPut:) ifTrue:
		[((window valueOfProperty: #tdbModelsInitializedInView ifAbsentPut: [Set new]) includes: self)
			ifFalse:
				[(window valueOfProperty: #tdbModelsInitializedInView) add: self.
				self changed: #expandRootsRequested]].
	
	^ super modelWakeUpIn: window