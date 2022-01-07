*TraceDebugger-Core-comparing
tdbIdentical: anObject
	"Answer whether the receiver and the argument are identical. Just like #==, but will not be converted into an inlined message send by the compiler and thus is transparent for proxies."

	^ self perform: #== with: anObject