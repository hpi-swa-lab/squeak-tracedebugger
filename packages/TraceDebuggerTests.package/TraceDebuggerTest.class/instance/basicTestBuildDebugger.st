tests - ui
basicTestBuildDebugger

	| debugger window |
	debugger := self newDebuggerOn: [self fail: 'this should not be executed'] newProcess.
	
	self shouldntFail: [window := debugger buildFullWith: self toolBuilder].
	self validateWindow: window.