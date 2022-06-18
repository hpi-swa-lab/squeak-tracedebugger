examples
exampleCompiler

	| stream cursor |
	stream := '2 + (3 * 4)' readStream.
	cursor := TDBCursor traceForBlock: [Compiler evaluate: stream].
	^ cursor object: stream collect:
		[:ea |
			(ea contentsFrom: 1 to: ea position)
				, '>'
				, (ea next
					ifNil: ['']
					ifNotNil: [:next | next asString , '<'])
				, ea upToEnd].