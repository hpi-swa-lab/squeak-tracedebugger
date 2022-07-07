*TraceDebugger-Core-printing
tdbClassString

	^ String streamContents: [:stream |
		self tdbPrintClassOn: stream]