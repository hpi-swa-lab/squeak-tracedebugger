private
enableTracingDuring: aBlock
	"Prepare all executable artifacts for being traced."

	| home |
	home := thisContext.
	
	process ifNotNil:
		[home wrap: [:block |
			"Unset the process's suspendedContext during tracing aBlock rather providing an old value to the simulated code or synchronizing it costly after each step."
			self flag: #suspicious. "This makes tracing non-thread-safe. At this point, any external code would see our process as terminated."
			process suspendedContext: nil.
			Processor activeProcess
				evaluate: [block
					ensure: [process suspendedContext: self context tdbproxyYourself]]
				onBehalfOf: process]].
	
	home wrap: [:block |
		self rootTrace enableSimulatorDuring: block].
	
	^ aBlock value