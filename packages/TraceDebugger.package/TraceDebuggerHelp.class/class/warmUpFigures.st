initialize-release
warmUpFigures

	self figures do: [:selector |
		self getFigure: selector].
	self subclassesDo: #warmUpFigures.