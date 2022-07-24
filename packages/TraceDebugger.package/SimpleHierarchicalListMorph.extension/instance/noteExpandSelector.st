*TraceDebugger-UI-accessing-pseudo override
noteExpandSelector
	"An optional selector that will be sent to the model for any node when it is expanded or collapsed."

	self flag: #moveUpstream.
	
	^ self valueOfProperty: #noteExpandSelector