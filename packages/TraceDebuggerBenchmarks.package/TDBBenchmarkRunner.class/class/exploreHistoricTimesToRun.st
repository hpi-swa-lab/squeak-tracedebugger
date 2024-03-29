historic data
exploreHistoricTimesToRun
	"self exploreHistoricTimesToRun"

	| datas diagram container |
	datas := self historicTimesToRun associations collect: [:benchmarkAndTimes |
		((Smalltalk classNamed: #SWDataLabeled)
			fromXValues: (benchmarkAndTimes value keys "collect: #asUnixTime")
			versusYValues: (benchmarkAndTimes value values collect: #asMilliSeconds))
				dataName: benchmarkAndTimes key shortPrintString;
				dimensionNames: {"'Time'" 'Commit'. 'Milliseconds'};
				yourself].
	
	diagram := (Smalltalk classNamed: #SWDiagram) new visualizeAll: datas with: (Smalltalk classNamed: #SWScatterPlot).
	
	container := Morph new
		color: Color white;
		extent: diagram fullBounds extent;
		yourself.
	container addMorph: diagram.
	diagram center: container center.
	^ container openInWindow