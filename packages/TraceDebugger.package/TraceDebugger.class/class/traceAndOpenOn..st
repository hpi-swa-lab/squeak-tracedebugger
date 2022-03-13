opening
traceAndOpenOn: aProcess
	"Create a new debugger on aProcess, trace its execution, and display the filled debugger."

	| debugger result |
	debugger := self newOn: aProcess.
	[[Project uiManager informUser: ('Tracing {1}...' format: {aProcess}) during:
		[debugger doStepForward:
			[debugger cursor
				doStepUntil: [aProcess isTerminated];
				timeIndex: 0;
				doRestart]]]
			ifCurtailed: [debugger jumpToPresence]]
				ensure: [result := debugger open].
	^ result