enumerating contexts
allContextsBelow: aContext

	^ Array streamContents: [:stream |
		self allContextsBelow: aContext do: [:context |
			stream nextPut: context]]