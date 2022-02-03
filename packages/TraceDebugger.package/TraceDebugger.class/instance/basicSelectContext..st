private
basicSelectContext: aContext
	"Select aContext without notifying the tree view, which is more expensive and thus handled separately."

	| oldContext |
	oldContext := selectedContext.
	selectedContext := aContext.
	
	"Update time index"
	selectedContext
		ifNil:
			["Set cursor to end"
			self basicDoStep:
				[self cursor timeIndex: self cursor maxTimeIndex]]
		ifNotNil:
			["Assure that the selected context is displayed at a valid point in time"
			(oldContext tdbproxyYourself tdbIdentical: aContext tdbproxyYourself) ifFalse:
				[self basicDoStep:
					[selectedContext := self cursor doSelect: selectedContext]]].
	
	self cacheSourcesDuring:
		[self changed: #selectedContext].