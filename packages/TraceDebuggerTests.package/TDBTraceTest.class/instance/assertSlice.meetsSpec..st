asserting
assertSlice: actualSlice meetsSpec: expectedSpec

	self assert: expectedSpec first equals:
		(actualSlice path collect: [:segment |
			segment isNumber
				ifTrue: [segment]
				ifFalse: [segment selector]]) asArray.
	
	expectedSpec allButFirst with: actualSlice children do: [:expectedChild :actualChild |
		self assertSlice: actualChild meetsSpec: expectedChild].