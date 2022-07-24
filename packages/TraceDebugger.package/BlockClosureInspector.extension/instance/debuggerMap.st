*TraceDebugger-UI-private-override
debuggerMap

	self flag: #workaround.
	
	^ debuggerMap ifNil: [debuggerMap := self object tdbproxyYourself "<-- TraceDebugger (here for performance)" method debuggerMap]