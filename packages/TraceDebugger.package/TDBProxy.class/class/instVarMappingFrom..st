private
instVarMappingFrom: oldClass
	"Hacked to get postscript from f952b65 working, where allInstVarNames (via superclass) and instSize were out of sync."

	| map |
	map := super instVarMappingFrom: oldClass.
	map from: oldClass instSize + 1 to: map size put: 0.
	^ map