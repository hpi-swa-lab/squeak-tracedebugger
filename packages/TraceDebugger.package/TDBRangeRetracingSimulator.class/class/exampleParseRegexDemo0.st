examples
exampleParseRegexDemo0

	| stream cursor |
	stream := '(a?(a?))[Qa-z\d}+](?=z:notNil:)' readStream.
	cursor := TDBCursor traceForBlock: [RxParser new parseStream: stream].
	^ (cursor memory
		object: stream
		atTimes: (0 to: cursor maxTimeIndex)
		collect: #position) explore