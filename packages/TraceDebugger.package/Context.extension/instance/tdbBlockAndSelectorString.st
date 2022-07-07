*TraceDebugger-Core-printing
tdbBlockAndSelectorString

	^ String streamContents: [:stream |
		self tdbPrintBlockAndSelectorOn: stream]