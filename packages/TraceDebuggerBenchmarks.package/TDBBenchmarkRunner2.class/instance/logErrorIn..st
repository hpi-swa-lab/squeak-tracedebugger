private
logErrorIn: aContext

	| transcript |
	transcript := Project current transcript.
	
	[transcript showln: 'benchmarks failed, error report:'.
	aContext errorReportOn: transcript.
	transcript endEntry]
		on: FileWriteError do:
			[transcript redirectToStdOut: false.
			^ self logErrorIn: aContext].
	
	^ String streamContents: [:stream | aContext errorReportOn: stream]