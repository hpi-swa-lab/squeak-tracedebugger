private
traceFor: aContext ifAbsent: absentBlock

	^ self rootTrace
		traceForContext: aContext tdbproxyYourself
		ifAbsent: absentBlock