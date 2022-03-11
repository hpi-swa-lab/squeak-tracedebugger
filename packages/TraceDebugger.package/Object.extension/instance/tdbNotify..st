*TraceDebugger-Core
tdbNotify: aStringOrText
	"Create and schedule a Notifier with the argument as the message in 
	order to request confirmation before a process can proceed."

	^ TraceDebugger
		openOn: Processor activeProcess
		context: thisContext sender
		label: thisContext sender selector
		contents: aStringOrText
		fullView: false