running
newSqueakDebuggerOn: aProcess

	^ Debugger
		openOn: aProcess
		context: aProcess suspendedContext
		label: nil
		contents: nil
		fullView: true