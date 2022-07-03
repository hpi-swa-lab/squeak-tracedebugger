accessing - toolbuilder
contextSlice: aContextSlice expanded: aBoolean

	(aBoolean
		ifTrue: [expanded ifAbsentAdd: aContextSlice]
		ifFalse: [(expanded remove: aContextSlice ifAbsent: []) notNil])
			ifFalse: [^ self].
	
	aBoolean ifFalse:
		[(self childContextSlicesFor: aContextSlice) do: [:child |
			self contextSlice: child expanded: false]].
	
	self changed: #contextSliceLabelFor: with: aContextSlice.