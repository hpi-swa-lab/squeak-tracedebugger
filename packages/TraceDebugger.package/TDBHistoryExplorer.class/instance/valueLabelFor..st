labels & details
valueLabelFor: value

	^ [value printString] on: self commonErrors do: [:ex |
		self errorText: 'printString error' exception: ex]