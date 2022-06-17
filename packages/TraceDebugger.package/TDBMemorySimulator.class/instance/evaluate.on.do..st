evaluating
evaluate: aBlock on: exceptionHandler do: exceptionBlock
	"Evaluate aBlock in the receiver, maybe isolating it from the rest of the image according to #shouldIsolate, and answer the result as it is seen from the global perspective. If aBlock signals an exception that can handled by the exceptionHandler, evaluate exceptionBlock with it.
	NOTE: Unhandled errors raised by aBlock will bubble up along the sender stack, but still, all handling might be isolated until the exception will have been resumed. This can mean that even the pop-up of the eventual debugger will be isolated and thus invisible to you! Thus make sure to pass all relevant exceptions with this message."

	| resultAndException |
	self shouldIsolate ifFalse:
		[^ self basicEvaluate:
			[aBlock on: exceptionHandler do: exceptionBlock]].
	
	resultAndException := self basicEvaluate: [
		| result exception |
		[result := aBlock value]
			on: exceptionHandler
			do: [:ex | exception := ex].
		{result. exception}].
	
	resultAndException second ifNotNil: [:ex | ^ exceptionBlock cull: ex].
	
	^ resultAndException first