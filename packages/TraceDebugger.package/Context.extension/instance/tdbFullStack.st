*TraceDebugger-Core-accessing
tdbFullStack

	^ Array streamContents: [:stream |
		| ctxt |
		ctxt := self.
		[stream nextPut: ctxt]
			doWhileFalse: [(ctxt := ctxt sender) isNil]]