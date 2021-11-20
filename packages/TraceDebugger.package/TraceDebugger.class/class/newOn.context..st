instance creation
newOn: aProcess context: aContext

	^ self new
		process: aProcess;
		selectContext: aContext;
		yourself