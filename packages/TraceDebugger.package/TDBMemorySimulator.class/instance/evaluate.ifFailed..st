evaluating
evaluate: aBlock ifFailed: failBlock
	"Evaluate aBlock in a the receiver and answer the result, maybe isolating it from the rest of the image according to #shouldIsolate. If aBlock signals a failure, evaluate failBlock with that failure."

	^ self
		evaluate: aBlock
		on: Error, Warning, Halt
		do: failBlock