tests
testForBlock

	| cursor |
	cursor := self classUnderTest forBlock: ['\w+' asRegex].