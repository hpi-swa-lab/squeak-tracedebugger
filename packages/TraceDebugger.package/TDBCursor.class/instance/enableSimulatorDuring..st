private
enableSimulatorDuring: aBlock

	self flag: #todo. "Install simulator"
	
	process ifNotNil:
		[thisContext wrap: [:block |
			process suspendedContext: nil.
			Processor activeProcess
				evaluate: [block
					ensure: [process suspendedContext: self context]]
				onBehalfOf: process]].
	
	^ aBlock value