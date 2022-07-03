printing
pathString
	"Answer a complete string representation of the path."

	| displayPath |
	displayPath := self displayPathIfShort: [:short | ^ short].
	^ displayPath joinSeparatedBy: Character space