examples
exampleSimple

	| object cursor |
	cursor := TDBCursor traceForBlock:
		[object := Array new: 2.
		object at: 1 put: 1.
		object at: 2 put: 2.
		object at: 1 put: 3.
		object at: 2 put: 5].
	
	(cursor
		object: object
		collect: [:obj | obj first])
			explore.
	
	(cursor
		object: object
		collect: [:obj | [obj first + obj second] ifError: [:ex | ex]]) explore.