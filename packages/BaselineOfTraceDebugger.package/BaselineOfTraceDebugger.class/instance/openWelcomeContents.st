scripts
openWelcomeContents

	Model useColorfulWindows: true.
	
	(Smalltalk classNamed: #TraceDebuggerHelp)
		warmUp;
		openHelpBrowser.
	(Project current world findA: SystemWindow) center: World center.