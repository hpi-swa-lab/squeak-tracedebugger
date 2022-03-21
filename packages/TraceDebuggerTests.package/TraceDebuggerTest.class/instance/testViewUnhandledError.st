tests
testViewUnhandledError

	self
		runDebuggerFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #signalError
			arguments: #())
		assertionsAndSteps:
			#((signalError nil (signalError))
			(stepOver stepOver)
			(error: '^Error new signal: aString' (signalError (error (error: (new) (signal: ...)))) ((self 'a TDBTestLogic') ('stack top' 'Error: Error!')) '*Error: Error!*')
			(restart stepOver stepOver)
			(defaultAction '' (signalError (error (error: (new) (signal: (messageText:) (signal (nextHandlerContextForSignal: ...) (handleSignal: (defaultAction (signalForException: ...)) (resumeUnchecked: ...))))))) ((self 'Error: Error!')) '*UnhandledError:*')
			(restart stepOver)
			(defaultAction nil nil ((self 'UnhandledError: ')) '*UnhandledError:*')).