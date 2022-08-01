building
createHelp

	^ (self on: TraceDebuggerHelp asHelpTopic) writeHelpTo: (FileDirectory default directoryNamed: 'help')