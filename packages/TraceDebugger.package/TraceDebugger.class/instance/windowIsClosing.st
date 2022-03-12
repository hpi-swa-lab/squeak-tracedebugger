toolbuilder - opening
windowIsClosing

	receiverInspector := nil.
	contextVariablesInspector := nil.
	
	process == nil ifTrue: [^ self].
	self basicTerminateProcess.
	
	Project current restoreDisplay.
	Smalltalk installLowSpaceWatcher.