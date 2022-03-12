examples
prepareShutDownListDuring: aBlock

	thisContext wrap: [:block |
		self flag: #workaround. "Simulation of Context>>#runUntilErrorOrReturnFrom: via Process>>#terminate is not yet supported. Remove it from the lists to demonstrate the remainder."
		Smalltalk
			removeFromShutDownList: EventSensor;
			removeFromStartUpList: EventSensor.
		block ensure:
			[Smalltalk
				addToShutDownList: EventSensor after: ScorePlayer;
				addToStartUpList: EventSensor after: Cursor]].
	
	thisContext wrap: [:block | | previous |
		"Optimization."
		previous := Form compressOnSnapshot.
		Form compressOnSnapshot: false.
		block ensure: [Form compressOnSnapshot: previous]].
	
	Symbol condenseNewSymbols.
	
	^ aBlock value