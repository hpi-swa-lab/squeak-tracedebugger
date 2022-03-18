tests
testFigure: selector

	| figure |
	figure := self classUnderTest perform: selector.
	self assert: figure colorsUsed size > 2 description: ('Figure {1} has probably loaded incorrectly' format: {selector}) resumable: true.