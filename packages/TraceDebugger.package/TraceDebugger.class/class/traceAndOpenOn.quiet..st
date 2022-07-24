opening
traceAndOpenOn: aProcess quiet: quiet
	"Create a new debugger on aProcess, trace its execution, and display the filled debugger. Unless quiet is true, inform the user during the tracing."

	| debugger result |
	quiet ifFalse:
		[Project uiManager informUser: ('Tracing {1}...' format: {aProcess}) during:
			[^ self traceAndOpenOn: aProcess quiet: true]].
	
	debugger := self newOn: aProcess.
	[[debugger doStepForward:
		[debugger cursor
			doStepUntil: [aProcess isTerminated];
			timeIndex: 0;
			doRestart]]
		ifCurtailed: [debugger jumpToPresence]]
			ensure: [result := debugger open].
	^ result