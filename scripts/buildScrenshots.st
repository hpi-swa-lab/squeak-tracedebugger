Smalltalk globals at: #CIMCRequired put: 'TraceDebuggerJobs'.
((Smalltalk globals at: #CIPrepareImageDirectory) directoryEntry / 'install.st') readStream fileIn.

TDBScreenshotBuilder new createScreenshot.
