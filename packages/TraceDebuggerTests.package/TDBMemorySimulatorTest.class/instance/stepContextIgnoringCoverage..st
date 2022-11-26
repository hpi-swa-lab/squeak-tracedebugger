private
stepContextIgnoringCoverage: aContext

	| context coverageMethod |
	context := aContext step.
	coverageMethod := TestCoverage >> #run:with:in:.
	[context method == coverageMethod] whileTrue:
		[| contextAndError |
		contextAndError := context runUntilErrorOrReturnFrom: context.
		self assert: contextAndError second isNil.
		context := contextAndError first].
	 ^ context