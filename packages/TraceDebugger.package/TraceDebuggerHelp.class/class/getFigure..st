figures - private
getFigure: selector

	^ (Figures ifNil: [Figures := Dictionary new]) at: selector ifAbsentPut:
		[Cursor wait showWhile:
			[self perform: selector]]