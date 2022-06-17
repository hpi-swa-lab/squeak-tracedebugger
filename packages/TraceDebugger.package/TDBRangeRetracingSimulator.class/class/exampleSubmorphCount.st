examples
exampleSubmorphCount

	| cursor m |
	cursor := TDBCursor traceForBlock: [m := WatchMorph new].
	^ cursor object: m collect:
		[:ea | [ea submorphCount] ifError: [:ex | ex]].