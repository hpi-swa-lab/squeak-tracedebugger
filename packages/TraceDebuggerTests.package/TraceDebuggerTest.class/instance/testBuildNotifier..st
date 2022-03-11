tests - ui
testBuildNotifier: messageText

	| debugger window |
	debugger := self newDebuggerOn: [self fail: 'this should not be executed'] newProcess.
	debugger messageText: messageText.
	
	self shouldntFail: [window := debugger buildNotifierWith: self toolBuilder].
	self validateWindow: window.