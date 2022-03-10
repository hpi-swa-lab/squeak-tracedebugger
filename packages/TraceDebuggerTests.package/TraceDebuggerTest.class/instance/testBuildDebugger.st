tests - ui
testBuildDebugger

	| debugger window |
	debugger := self newDebuggerOn: [self notify: 'foo'] newProcess.
	
	self shouldntFail: [window := debugger buildFullWith: self toolBuilder].
	self validateWindow: window.