accessing
detectTraceFor: aContext atTime: timeIndex

	^ self withAllDescendants tdbDetect: [:descendant |
		(descendant contextAtTime: timeIndex) perform: #== with: aContext]