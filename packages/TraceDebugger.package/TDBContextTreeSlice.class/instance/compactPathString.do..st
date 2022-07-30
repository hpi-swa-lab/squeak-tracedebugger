printing
compactPathString: relative do: printerBlock
	"Answer a compact string representation of the path. For subsequent contexts with the same method class/receiver class, do not repeat the class part. If relative is true, do not repeat the last class part of the parent path. Evaluate printerBlock with the used TDBContextTreeSlicePrinter instance before printing."

	^ self pathStringDo: [:printer |
		printer
			compact: true;
			relativeToParent: relative;
			in: printerBlock]