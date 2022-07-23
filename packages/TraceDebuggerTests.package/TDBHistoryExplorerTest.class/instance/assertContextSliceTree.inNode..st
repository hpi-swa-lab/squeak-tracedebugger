asserting
assertContextSliceTree: spec inNode: aContextTreeSlice

	| actualLabels expectedLabels |
	expectedLabels := spec first isString ifTrue: [{spec first}] ifFalse: [spec first].
	actualLabels := (explorer contextSliceLabelsFor: aContextTreeSlice) asArray.
	self assert: expectedLabels size equals: actualLabels size.
	expectedLabels with: actualLabels do: [:expectedLabel :actualLabel |
		self assert: (expectedLabel match: actualLabel)].
	
	self assertContextSliceTree: spec allButFirst inNodes: (explorer childContextSlicesFor: aContextTreeSlice).