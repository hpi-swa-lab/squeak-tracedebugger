printing
multilineString

	^ String streamContents: [:stream |
		self printMultilineOn: stream]