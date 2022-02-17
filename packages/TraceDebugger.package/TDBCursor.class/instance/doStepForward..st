private
doStepForward: aBlock

	outerTracingContext ifNotNil:
		[^ aBlock value].
	
	outerTracingContext := thisContext home.
	^ aBlock ensure: [outerTracingContext := nil]