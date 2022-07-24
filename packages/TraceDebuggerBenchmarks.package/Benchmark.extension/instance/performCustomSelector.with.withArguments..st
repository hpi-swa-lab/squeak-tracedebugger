*TraceDebuggerBenchmarks-Base-benchmarking-pseudo-override
performCustomSelector: aSelector with: aPrefix withArguments: arguments
	| customSelector |
	customSelector := (aPrefix, aSelector capitalized) asSimpleSetter.
	^ (self respondsTo: customSelector) ifTrue: [ 
		self perform: customSelector withArguments: arguments]