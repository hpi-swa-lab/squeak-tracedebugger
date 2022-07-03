accessing - toolbuilder
valueLabelFor: value

	^ [value printString] on: Error, Warning, Halt do: [:ex |
		'<printString error: {1}>' format: {ex}]