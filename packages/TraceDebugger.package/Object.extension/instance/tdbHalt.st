*TraceDebugger-Core
tdbHalt

	self flag: #forLater. "Provide TraceDebugger as standard via ToolSet/AppRegistry"
	^ TraceDebugger
		openOn: Processor activeProcess
		context: thisContext sender
		label: thisContext sender selector
		contents: nil
		fullView: false