toolbuilder - constants
extraCellGap
	"Since BorderedMorph is currently not able to add the #cellGap between *two* fixed buttons rows at the same #topFraction, add that offset here explicitely."

	self flag: #refactor. "mt: See BorderedMorph >> #changeCellGapOfLayoutFrames:."
	^ ToolBuilder default panelSpacing