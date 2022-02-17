private
assureTracingDuring: aBlock

	outerTracingContext ifNotNil:
		[#installed == outerTracingContext ifFalse:
			[| ctxt |
			ctxt := thisContext.
			self enableTracingDuring:
				[outerTracingContext insertSender:
					(thisContext sender cut: ctxt).
				thisContext privSender: ctxt].
			outerTracingContext := #installed]].
	
	^ aBlock value