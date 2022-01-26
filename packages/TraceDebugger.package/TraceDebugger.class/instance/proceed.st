actions
proceed

	| theProcess errorWasInUIProcess |
	self okToChange ifFalse: [^ self].
	Smalltalk okayToProceedEvenIfSpaceIsLow ifFalse: [^ self].
	
	theProcess := process. "would be terminated during #close otherwise"
	process := nil.
	errorWasInUIProcess := theProcess environmentRemoveKey: #tdbErrorWasInUIProcess ifAbsent: [false].
	self close.
	
	errorWasInUIProcess ifTrue:
		[Project current uiProcess: theProcess].
	theProcess resume.
	errorWasInUIProcess ifTrue:
		[Processor terminateActive].