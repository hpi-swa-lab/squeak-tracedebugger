*TraceDebuggerBenchmarks-Base-benchmarking-pseudo-override
performCustomSelector: aSelector with: aPrefix withArguments: arguments 
	| customSelector |
	self flag: #moveUpstream.
	customSelector := (aPrefix, aSelector capitalized) asSimpleSetter.
	^ (self respondsTo: customSelector) ifTrue: [ 
		self perform: customSelector withArguments: arguments]