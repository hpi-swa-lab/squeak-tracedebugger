*TraceDebugger-Core
tdbNotify: aStringOrText

	^ TraceDebugger
		openOn: Processor activeProcess
		context: thisContext sender
		label: thisContext sender selector
		contents: aStringOrText
		fullView: false