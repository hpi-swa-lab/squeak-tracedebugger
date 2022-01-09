private
doStepForward: aBlock

	enableSimulatorBlock :=
		[| ctxt |
		ctxt := thisContext.
		self enableTracingDuring:
			[thisContext home insertSender:
				(thisContext sender cut: ctxt).
			thisContext privSender: ctxt].
		enableSimulatorBlock := nil].
	
	^ aBlock value