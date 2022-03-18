thisContext insertSender: (Context contextOn: UnhandledError, ProvideAnswerNotification do: [:ex |
    Transcript showln: (String streamContents: [:stream | ex signalerContext errorReportOn: stream]).
    Smalltalk snapshot: true andQuitWithExitCode: 1]).


Smalltalk globals at: #CIMCRequired put: 'TraceDebuggerJobs'.
Smalltalk globals at: #CIPrepareImageDirectory put: (FileDirectory forFileName: Smalltalk documentPath).
((Smalltalk globals at: #CIPrepareImageDirectory) directoryEntry / 'install.st') readStream fileIn.

(Smalltalk classNamed: #TDBScreenshotBuilder) new createScreenshot.

Smalltalk snapshot: false andQuitWithExitCode: 0.
