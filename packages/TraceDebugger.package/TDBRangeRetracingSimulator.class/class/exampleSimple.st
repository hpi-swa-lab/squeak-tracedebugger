examples
exampleSimple

	| object cursor |
	cursor := TDBCursor traceForBlock:
		[object := TDBTestObject new.
		object plonk: 1.
		object griffle: 2.
		object plonk: 3.
		object griffle: 5].
	
	(cursor
		object: object
		collect: [:obj | obj plonk])
			explore.
	
	(cursor
		object: object
		collect: [:obj | [obj plonk + obj griffle] ifError: [:ex | ex]]) explore.