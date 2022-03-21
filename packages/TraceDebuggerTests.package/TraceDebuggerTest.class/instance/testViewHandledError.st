tests
testViewHandledError

	self
		runDebuggerFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #handleError
			arguments: #())
		assertionsAndSteps:
			#((handleError nil (handleError))
			(stepOver stepThrough)
			(handleError 'signalError' (handleError (on:do: (handleError))))
			(stepOver)
			(handleError 'self signalError' (handleError (on:do: (handleError (signalError ...)))))
			(stepBack stepThrough)
			(handleError 'resumeUnchecked: {ex}' (handleError ...))).