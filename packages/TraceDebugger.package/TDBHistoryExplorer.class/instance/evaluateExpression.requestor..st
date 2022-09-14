evaluating
evaluateExpression: aStringOrText requestor: requestor

	| block |
	block := self
		compileToBlock: aStringOrText
		requestor: requestor
		ifFail:
			[self flag: #workaround. "#evaluateExpression:requestor: should allow for ifFail: argument"
			^ self tdbAbortRequest].
	
	^ self cursor object: self object collect: [:ea |
		[block value: ea] on: self commonErrors do: [:ex | ex]]