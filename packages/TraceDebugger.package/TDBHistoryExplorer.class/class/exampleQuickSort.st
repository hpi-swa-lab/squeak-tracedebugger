examples
exampleQuickSort
	"
	self exampleQuickSort
	"

	^ self
		openForBlock: [#(13 10 8 3 15 6 5 1 12 4 11 14 7 2 9 0) copy quickSort]
		expression: 'self copy'