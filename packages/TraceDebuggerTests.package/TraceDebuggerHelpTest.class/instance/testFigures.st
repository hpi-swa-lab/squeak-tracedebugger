tests
testFigures

	self classUnderTest figures do: [:selector |
		self testFigure: selector].