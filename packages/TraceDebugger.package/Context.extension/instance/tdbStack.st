*TraceDebugger-UI-accessing
tdbStack

	^ (Generator on: [:stream |
		| ctxt |
		ctxt := self.
		[stream nextPut: ctxt]
			doWhileFalse: [(ctxt := ctxt sender) isNil]])
		
		contents flag: #workaround "Simulators cannot resume coroutine at the moment!"