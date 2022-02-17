tests
testBuildNotifier

	| debugger window |
	debugger := self newDebuggerOn: [self notify: 'foo'] newProcess.
	
	self shouldntFail: [window := debugger buildNotifierWith: self toolBuilder].
	self validateWindow: window.