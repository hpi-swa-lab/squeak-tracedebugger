*TraceDebugger-Core-printing
tdbShortSignature

	^ String streamContents: [:stream |
		self tdbPrintSignatureOn: stream showCategory: false]