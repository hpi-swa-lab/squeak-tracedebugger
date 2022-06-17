*TraceDebuggerBenchmarks-Base-benchmarking-pseudo-override
process: aSelector result: anObject withTimer: aSMarkTimer

	(self performCustomSelector: aSelector with: #verify withArguments: {anObject}) ifNotNil: [:verified |
		self assert: verified].