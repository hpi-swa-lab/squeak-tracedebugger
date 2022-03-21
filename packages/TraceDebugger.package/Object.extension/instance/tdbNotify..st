*TraceDebugger-Core
tdbNotify: aStringOrText

	^ TraceDebugger
		openOn: Processor activeProcess
		context: thisContext sender
		label: thisContext selector
		contents: aStringOrText
		fullView: false