examples
exampleShutDown
	"
	Trace and debug the entire shutDown/startUp activity of the image. This example marks a class of use cases that you cannot debug interactively in vanilla Squeak, but the TraceDebugger removes this limitation.
	
	self exampleShutDown
	"

	(Project uiManager confirm: 'The following will simulate the shutDown/startUp activity of your image (no shapshot).\This might take a couple of minutes.\You CANNOT interrupt this process without invalidating your image. If the simulation fails or is interrupted, your image may become UNUSABLE.\It is recommended to save your image before doing this.\\Proceed anyway?' withCRs) ifFalse: [^ self].
	self prepareShutDownListDuring:
		[[Smalltalk processShutDownList: false; processStartUpList: false] traceAndDebug].