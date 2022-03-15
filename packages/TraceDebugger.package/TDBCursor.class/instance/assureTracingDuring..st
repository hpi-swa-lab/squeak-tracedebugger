private
assureTracingDuring: aBlock
	"Enable tracing now and have it disabled when the associated #doStepForward: send on the stack returns."

	#installed == outerTracingContext ifFalse:
		[| ctxt |
		ctxt := thisContext.
		self enableTracingDuring:
			[outerTracingContext insertSender:
				(thisContext sender cut: ctxt).
			thisContext privSender: ctxt].
		outerTracingContext := #installed].
	
	^ aBlock value