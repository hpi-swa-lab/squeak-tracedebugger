printing
shortPrintString

	^ String streamContents: [:stream |
		self shortPrintOn: stream]