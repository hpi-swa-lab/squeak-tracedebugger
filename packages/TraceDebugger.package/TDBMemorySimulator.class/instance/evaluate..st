evaluating
evaluate: aBlock
	"Evaluate aBlock in a the receiver, maybe isolating it from the rest of the image according to #shouldIsolate, and answer the result as it is seen from the global perspective."

	self shouldIsolate ifFalse: [^ self basicEvaluate: aBlock].
	
	^ self
		evaluate: aBlock
		ifFailed: [:ex | TDBIsolatedError signalForException: ex]