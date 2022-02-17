private
doStepForward: aBlock

	enableSimulatorBlock ifNil:
		[enableSimulatorBlock :=
			[| ctxt |
			ctxt := thisContext.
			self enableTracingDuring:
				[thisContext home insertSender:
					(thisContext sender cut: ctxt).
				thisContext privSender: ctxt].
			enableSimulatorBlock := nil]].
	
	^ aBlock value