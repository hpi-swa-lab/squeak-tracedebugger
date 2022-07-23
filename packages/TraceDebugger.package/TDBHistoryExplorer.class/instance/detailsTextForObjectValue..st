labels & details
detailsTextForObjectValue: anObject

	^ [anObject printString] on: self commonErrors do: [:ex |
		self errorText: 'printString error' exception: ex]