toolbuilder - constants
textFrame
	
	| frame |
	^ (frame := super textFrame) copy
		topOffset: frame topOffset + self buttonHeight + self extraCellGap;
		yourself