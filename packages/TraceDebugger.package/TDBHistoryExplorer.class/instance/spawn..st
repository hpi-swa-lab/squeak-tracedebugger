actions
spawn: aMemorySlice

	| timesAndValues newSlice newExplorer |
	"Convert the slice into a new slice with a TDBRangeProxy for each value. Any follow-up range queries in the new explorer will treat the slice as a vector and resolve it automatically. Make sure not to nest slices."
	timesAndValues := aMemorySlice timesAndValues.
	newSlice := aMemorySlice class
		memory: aMemorySlice memory
		basicIntervals: timesAndValues keys
		rawValues: timesAndValues values
		sideEffects: (timesAndValues values collect: [:value |
			(thisContext objectClass: value) isTdbProxyClass
				ifTrue: [value xxxtdbproxySideEffects]]).
	
	newExplorer := self class
		forCursor: self cursor
		object: newSlice.
	self flag: #todo. "beautify labelString after spawn?"
	newExplorer context: self context.
	^ newExplorer open