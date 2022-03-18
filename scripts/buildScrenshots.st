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
Transcript showln: 'Done.'; showln.

Transcript showln: 'Creating screenshots...'.
(Smalltalk classNamed: #TDBScreenshotBuilder) new createScreenshot.
Transcript showln: 'Done.'; showln.

Smalltalk snapshot: false andQuitWithExitCode: 0.
