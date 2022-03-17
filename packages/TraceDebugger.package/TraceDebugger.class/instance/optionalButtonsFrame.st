toolbuilder - constants - layout
optionalButtonsFrame
	
	| frame |
	^ (frame := super optionalButtonsFrame) copy
		topOffset: frame topOffset + self buttonHeight + self extraCellGap;
		bottomOffset: frame bottomOffset + self buttonHeight + self extraCellGap;
		yourself