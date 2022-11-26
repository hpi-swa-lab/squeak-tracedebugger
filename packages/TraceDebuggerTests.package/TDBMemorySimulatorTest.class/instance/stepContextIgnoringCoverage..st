private
stepContextIgnoringCoverage: aContext

	| context |
	context := aContext step.
	
	[context selector == #run:with:in:] whileTrue:
		[| contextAndError |
		contextAndError := context runUntilErrorOrReturnFrom: context.
		self assert: contextAndError second isNil.
		context := contextAndError first].
	
	^ context