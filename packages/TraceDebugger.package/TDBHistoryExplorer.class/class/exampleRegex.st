examples
exampleRegex
	"
	self exampleRegex
	"

	| stream |
	stream := '(a?(a?))[Qa-z\d}+](?=z:notNil:)' readStream.
	^ self
		openForBlock: [RxParser new parseStream: stream]
		object: stream
		expression: 'collection first: position - 2'