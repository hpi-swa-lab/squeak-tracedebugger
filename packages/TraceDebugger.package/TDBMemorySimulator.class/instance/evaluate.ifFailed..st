evaluating
evaluate: aBlock ifFailed: failBlock
	"Evaluate aBlock in a the receiver, maybe isolating it from the rest of the image according to #shouldIsolate, and answer the result as it is seen from the global perspective. If aBlock signals a failure, evaluate failBlock with that failure."

	^ self
		evaluate: aBlock
		on: Error, Warning, Halt
		do: failBlock