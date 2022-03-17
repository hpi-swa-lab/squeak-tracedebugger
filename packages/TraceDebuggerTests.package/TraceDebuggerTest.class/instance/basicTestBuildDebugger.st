tests - ui
basicTestBuildDebugger

	| debugger window completed |
	debugger := self newDebuggerOn: [completed := true] newProcess.
	
	self shouldntRaise: [window := debugger buildFullWith: self toolBuilder].
	self validateWindow: window.
	debugger close.
	self assert: completed isNil.