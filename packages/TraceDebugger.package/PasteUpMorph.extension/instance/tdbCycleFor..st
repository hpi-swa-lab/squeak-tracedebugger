*TraceDebugger-Core-examples
tdbCycleFor: aDuration
	"Do cycles for the receiver until aDuration has elapsed. Answer the number of cycles."
	"Project current world tdbCycleFor: 2 seconds"

	| cycles stop |
	stop := Time millisecondClock + aDuration asMilliSeconds.
	cycles := 0.
	[Time millisecondClock < stop] whileTrue:
		[self doOneSubCycle.
		cycles := cycles + 1].
	^ cycles