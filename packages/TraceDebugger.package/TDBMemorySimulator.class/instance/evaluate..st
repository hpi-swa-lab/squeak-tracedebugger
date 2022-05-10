evaluating
evaluate: aBlock
	"Evaluate aBlock in a the receiver and answer the result, maybe isolating it from the rest of the image according to #shouldIsolate."

	self shouldIsolate ifFalse: [^ self basicEvaluate: aBlock].
	
	^ self
		evaluate: aBlock
		ifFailed: [:ex | TDBIsolatedError signalForException: ex]