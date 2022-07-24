examples
exampleMorphInitialize

	| cursor m |
	cursor := TDBCursor traceForBlock: [m := RectangleMorph new].
	^ cursor object: m collect:
		[:ea | [ea longPrintString] ifError: [:ex | ex]].