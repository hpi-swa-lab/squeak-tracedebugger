*TraceDebugger-Core-printing
tdbSignature

	^ String streamContents: [:stream |
		self tdbPrintSignatureOn: stream]