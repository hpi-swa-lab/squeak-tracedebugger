instance creation
catch: exceptionSet during: aBlock

	| error result |
	[result := aBlock value]
		on: exceptionSet do: [:ex |
			error := ex].
	^ self error: error result: result