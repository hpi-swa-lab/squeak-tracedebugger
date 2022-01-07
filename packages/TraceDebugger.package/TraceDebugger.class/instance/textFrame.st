toolbuilder - constants
textFrame
	
	| frame |
	^ (frame := super textFrame) copy
		topOffset: frame topOffset + self buttonHeight;
		yourself