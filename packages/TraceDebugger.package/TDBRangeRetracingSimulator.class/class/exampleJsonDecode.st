examples
exampleJsonDecode

	| stream cursor |
	stream := '{"plonk": 1, "griffle": {"wiffy": [2, 3], "ziffy": true}}' readStream.
	cursor := TDBCursor traceForBlock: [WebUtils jsonDecode: stream].
	^ cursor object: stream collect: #position