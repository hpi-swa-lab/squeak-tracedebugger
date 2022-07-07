evaluating
debugExpression: aStringOrText requestor: requestor

	| block debugger |
	block := self
		compileToBlock: aStringOrText
		requestor: requestor
		ifFail: [^ false].
	
	debugger := self cursor object: self object debug: block.
	debugger labelString: ('Debug range retracing (experimental)' format: {debugger labelString}).
	^ debugger