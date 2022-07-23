printing
pathString
	"Answer a complete string representation of the path."

	^ self newPrinter
		compact: false;
		makeString