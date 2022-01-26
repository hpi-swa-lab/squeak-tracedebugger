instance creation
newOn: aProcess context: aContext

	^ self new
		process: aProcess context: aContext;
		selectContext: aContext;
		yourself