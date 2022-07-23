building
makeString
	"Build the path string and answer the result."

	| displayPath |
	displayPath := self findPathIfShort: [:last |
		^ self makeStringForSingleTimeIndex: last].
	
	^ self compact
		ifFalse: [self makeFullStringFor: displayPath]
		ifTrue: [self makeCompactStringFor: displayPath]