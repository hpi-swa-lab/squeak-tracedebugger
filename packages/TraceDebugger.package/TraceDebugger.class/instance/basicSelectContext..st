private - stepping
basicSelectContext: aContext
	"Select aContext without officially notifying the tree view, which is more expensive and thus handled separately."

	| changed |
	changed := (selectedContext tdbIdentical: aContext) not.
	selectedContext := aContext.
	
	"Update time index"
	selectedContext
		ifNil:
			["Set cursor to end"
			self basicDoStep:
				[self cursor timeIndex: self cursor maxTimeIndex]]
		ifNotNil:
			["Assure that the selected context is displayed at a valid point in time"
			changed ifTrue:
				[self basicDoStep:
					[selectedContext := self cursor doSelect: selectedContext]]].
	
	changed ifTrue:
		[self cacheSourcesDuring:
			[self changed: #selectedContext]].