*TraceDebugger-UI-accessing-pseudo override
noteExpandSelector: aSymbol
	"An optional selector that will be sent to the model for any node when it is expanded or collapsed."

	self setProperty: #noteExpandSelector toValue: aSymbol.