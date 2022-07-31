support
exportAsAnimatedGIFNamed: aString

	^ FileStream newFileNamed: aString do: [:stream |
		self exportAsAnimatedGIFOn: stream]