accessing
detectTraceFor: aContext atTime: timeIndex

	^ self withAllDescendants tdbDetect: [:descendant |
		(descendant contextAtTime: timeIndex) tdbIdentical: aContext]