toolbuilder - opening
windowIsClosing

	receiverInspector := nil.
	contextVariablesInspector := nil.
	
	process == nil ifTrue: [^ self].
	self terminateProcess.
	
	Project current restoreDisplay.
	Smalltalk installLowSpaceWatcher.