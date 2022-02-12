code pane menu
createCustomFieldFor: expression orCancel: cancelBlock

	| compilationCue field getter |
	field := self inspector newCustomField.
	
	compilationCue := self newCompilationCueFor: expression requestor: nil.
	getter := (Compiler new
		compileCue: compilationCue
		noPattern: true
		ifFail: [^ cancelBlock value])
			generateWithTempNames.

	field valueGetterExpression: expression.	
	field valueGetter: [:object | object
		withArgs: ({self inspector doItContext} first: getter numArgs)
		executeMethod: getter].
	
	field emphasizeName.
	
	^ field