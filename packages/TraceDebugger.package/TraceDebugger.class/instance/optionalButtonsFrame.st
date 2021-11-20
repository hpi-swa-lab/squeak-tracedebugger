toolbuilder - constants
optionalButtonsFrame
	
	| frame |
	^ (frame := super optionalButtonsFrame) copy
		topOffset: frame topOffset + self buttonHeight;
		bottomOffset: frame bottomOffset + self buttonHeight;
		yourself