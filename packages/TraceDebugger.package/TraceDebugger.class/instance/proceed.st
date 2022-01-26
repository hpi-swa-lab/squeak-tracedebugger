actions - process
proceed

	| theProcess errorWasInUIProcess |
	self okToChange ifFalse: [^ self].
	Smalltalk okayToProceedEvenIfSpaceIsLow ifFalse: [^ self].
	self canProceed ifFalse: [^ self changed: #flash].
	
	errorWasInUIProcess := process environmentRemoveKey: #tdbErrorWasInUIProcess ifAbsent: [false].
	theProcess := self releaseProcess.
	self close.
	
	errorWasInUIProcess ifTrue:
		[Project current uiProcess: theProcess].
	theProcess resume.
	errorWasInUIProcess ifTrue:
		[Processor terminateActive].