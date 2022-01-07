tests
testBuildDebugger

	| debugger window |
	debugger := self classUnderTest newOn: [self notify: 'foo'] newProcess.
	
	self shouldntFail: [window := debugger buildFullWith: self toolBuilder].
	self validateWindow: window.