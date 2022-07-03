evaluating
compileToBlock: aStringOrText requestor: requestor ifFail: failBlock

	| block compilationCue |
	compilationCue := self auxiliaryInspector
		newCompilationCueFor: aStringOrText
		requestor: requestor.
	block := compilationCue getClass evaluatorClass new
		tdbMakeBlockForCue: compilationCue
		noPattern: true
		logged: requestor notNil
		ifFail: [^ failBlock value].
	
	^ block