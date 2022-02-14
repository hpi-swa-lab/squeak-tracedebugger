code pane menu
createCustomFieldFor: expression requestor: requestor orCancel: cancelBlock

	| compilationCue field getter |
	field := self inspector newCustomField.
	
	compilationCue := self
		newCompilationCueFor: expression
		requestor: requestor.
	getter := (compilationCue receiver class evaluatorClass
		compileCue: compilationCue
		noPattern: true
		ifFail: [^ cancelBlock value])
			generateWithTempNames.
	
	field valueGetterExpression: expression.	
	field valueGetter: [:object | object
		withArgs: ({compilationCue context} first: getter numArgs)
		executeMethod: getter].
	
	field emphasizeName.
	
	^ field