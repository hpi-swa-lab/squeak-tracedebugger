private
logErrorIn: aContext

	| transcript |
	transcript := Project current transcript.
	
	[aContext errorReportOn: transcript.
	transcript endEntry.
	true]
		on: FileWriteError do:
			[transcript redirectToStdOut: false.
			^ self logErrorIn: aContext].