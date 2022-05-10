evaluating
evaluate: aBlock on: exceptionHandler do: exceptionBlock
	"Evaluate aBlock in the receiver, maybe isolating it from the rest of the image according to #shouldIsolate. If aBlock signals an exception that can handled by the exceptionHandler, evaluate exceptionBlock with it. NOTE: Unhandled errors raised by aBlock will bubble up along the sender stack, but still, all handling might be isolated until the exception will have been resumed. This can mean that even the pop-up of the eventual debugger will be isolated and thus invisible to you! Thus make sure to pass all relevant exceptions with this message."

	| result exception |
	self shouldIsolate ifFalse:
		[^ self basicEvaluate:
			[aBlock on: exceptionHandler do: exceptionBlock]].
	
	self basicEvaluate: [[result := aBlock value]
		on: exceptionHandler
		do: [:ex | exception := ex]].
	
	(self basicEvaluate: [exception]) ifNotNil: [:ex | ^ exceptionBlock cull: ex].
	
	^ self basicEvaluate: [result]