accessing
expression: aStringOrText requestor: requestor

	(self computeSliceFrom: aStringOrText for: requestor) ifFalse:
		[^ false].
	
	self basicExpression: aStringOrText.
	
	self changed: #expression.
	^ true