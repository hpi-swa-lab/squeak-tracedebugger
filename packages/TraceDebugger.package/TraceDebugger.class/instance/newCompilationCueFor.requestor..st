evaluating
newCompilationCueFor: expression requestor: requestor

	^ CompilationCue
		source: expression
		context: self doItContext
		receiver: self doItReceiver
		class: self selectedClassOrMetaClass
		environment: self environment
		requestor: requestor