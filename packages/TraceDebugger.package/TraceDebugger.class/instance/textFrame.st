toolbuilder - constants - layout
textFrame
	
	| frame |
	^ (frame := super textFrame) copy
		topOffset: frame topOffset + self buttonHeight +
			(self wantsOptionalButtons ifTrue: [self extraCellGap] ifFalse: [0]);
		yourself