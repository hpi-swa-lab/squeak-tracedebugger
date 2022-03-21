running
newSqueakDebuggerOn: aProcess label: label

	^ Debugger
		openOn: aProcess
		context: aProcess suspendedContext
		label: label
		contents: nil
		fullView: true