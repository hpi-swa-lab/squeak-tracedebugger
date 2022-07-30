printing
pathStringDo: printerBlock
	"Answer a string representation of the path. Evaluate printerBlock with the used TDBContextTreeSlicePrinter instance before printing."

	^ self newPrinter
		in: printerBlock;
		makeString