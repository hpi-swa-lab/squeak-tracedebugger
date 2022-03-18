figures - private
getFigure: selector

	^ (Figures ifNil: [Figures := Dictionary new]) at: selector ifAbsentPut:
		[self perform: selector]