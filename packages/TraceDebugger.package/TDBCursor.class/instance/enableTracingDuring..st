private
enableTracingDuring: aBlock

	| home |
	home := thisContext.
	
	process ifNotNil:
		[home wrap: [:block |
			process suspendedContext: nil.
			Processor activeProcess
				evaluate: [block
					ensure: [process suspendedContext: self context tdbproxyYourself]]
				onBehalfOf: process]].
	
	home wrap: [:block |
		self rootTrace enableSimulatorDuring: block].
	
	^ aBlock value