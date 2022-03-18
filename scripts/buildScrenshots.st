Smalltalk globals at: #CIMCRequired put: 'TraceDebuggerJobs'.
((Smalltalk globals at: #CIPrepareImageDirectory) directoryEntry / 'install.st') readStream fileIn.

(Smalltalk classNamed: #TDBScreenshotBuilder) new createScreenshot.

Smalltalk snapshot: false andQuitWithExitCode: 0.

