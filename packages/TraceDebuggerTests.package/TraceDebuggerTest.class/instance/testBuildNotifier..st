tests - ui
testBuildNotifier: messageText

	| debugger window |
	debugger := self newDebuggerOn: [self fail: 'this should not be executed'] newProcess.
	debugger messageText: messageText.
	
	self shouldntRaise: [window := debugger buildNotifierWith: self toolBuilder].
	window := self validateWindow: window.
	^ window