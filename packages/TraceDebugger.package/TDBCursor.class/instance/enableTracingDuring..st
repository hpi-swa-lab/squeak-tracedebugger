private
enableTracingDuring: aBlock

	| home |
	home := thisContext.
	
	home wrap: [:block |
		self rootTrace enableSimulatorDuring: block].
	
	process ifNotNil:
		[home wrap: [:block |
			process suspendedContext: nil.
			Processor activeProcess
				evaluate: [block
					ensure: [process suspendedContext: self context]]
				onBehalfOf: process]].
	
	^ aBlock value