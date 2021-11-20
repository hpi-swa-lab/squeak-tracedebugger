tests
testBuildNotifier

	| debugger window |
	debugger := self classUnderTest newOn: [self notify: 'foo'] newProcess.
	
	self shouldntFail: [window := debugger buildNotifierWith: self toolBuilder].
	self validateWindow: window.