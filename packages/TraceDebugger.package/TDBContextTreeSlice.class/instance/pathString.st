printing
pathString
	"Answer a complete string representation of the path."

	^ self pathStringDo: [:printer | printer compact: false]