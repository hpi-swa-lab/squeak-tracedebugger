| errors |
"Debugging convenience & fail-safety"
FileStream startUp: true. "Reload stdio file handles"
thisContext wrap: [:block |
	TranscriptStream redirectToStdOut: true.
	block ensure: [TranscriptStream redirectToStdOut: false]].
thisContext insertSender: (Context contextOn: UnhandledError, ProvideAnswerNotification do: [:ex |
	Transcript showln: (String streamContents: [:stream | ex signalerContext errorReportOn: stream]).
	Smalltalk snapshot: true andQuitWithExitCode: 1]).


Transcript showln: 'Loading screenshot jobs...'.
Smalltalk globals at: #CIMCRequired put: 'TraceDebuggerJobs'.
Smalltalk globals at: #CIPrepareImageDirectory put: (FileDirectory forFileName: Smalltalk documentPath).
((Smalltalk globals at: #CIPrepareImageDirectory) directoryEntry / 'install.st') readStream fileIn.
Transcript showln: 'Done.'; cr.

Transcript showln: 'Creating screenshots...'.
Display uiScaleFactor: 1.0; flag: #workaround. "smalltalkCI: default scale factor in Squeak64-6.0 image is wrong (https://github.com/hpi-swa/smalltalkCI/issues/569)"
errors := (Smalltalk classNamed: #TDBScreenshotBuilder) createScreenshots.
Transcript showln: (('Done with {1} error' asPluralBasedOn: errors) format: {errors size}) , '.'; cr.

Transcript showln: 'Creating help...'.
(Smalltalk classNamed: #TDBHelpBuilder) createHelp.
Transcript showln: 'Done.'; cr.

Smalltalk snapshot: false andQuitWithExitCode: errors notEmpty asBit.
