printing
compactPathString: relative
	"Answer a compact string representation of the path. For subsequent contexts with the same method class/receiver class, do not repeat the class part. If relative is true, do not repeat the last class part of the parent path."

	^ self newPrinter
		compact: true;
		relativeToParent: relative;
		makeString