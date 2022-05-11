tests
testFigures
	<timeout: 10 "seconds">

	self classUnderTest figures do: [:selector |
		self testFigure: selector].