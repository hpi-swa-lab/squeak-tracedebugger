((Smalltalk globals at: #CIPrepareImageDirectory) directoryEntry / 'install.st') readStream fileIn.

"Adjust default welcome contents"
TheWorldMainDockingBar instance closeAllWindows.
(World findA: PreferenceWizardMorph) ifNotNil: [:wizard | | title |
	title := wizard findA: TextMorph.
	title newContents: (('{1} - {2}' format: {title contents. TraceDebugger appName})
		asText
			addAllAttributes: (t contents attributesAt: 1);
			yourself)].

"Prepare world"
(Smalltalk classNamed: #BaselineOfTraceDebugger) new openWelcomeContents.

"Fill caches"
Project current world doOneCycle.
