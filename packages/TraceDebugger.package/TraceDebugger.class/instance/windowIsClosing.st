toolbuilder - opening
windowIsClosing

	receiverInspector := nil.
	contextVariablesInspector := nil.
	
	process == nil ifTrue: [^ self].
	process terminateAggressively.
	process := nil.
	
	Project current restoreDisplay.
	Smalltalk installLowSpaceWatcher.