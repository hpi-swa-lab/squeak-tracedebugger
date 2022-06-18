evaluating
evaluate: aBlock on: exceptionHandler do: exceptionBlock
	"Evaluate aBlock in the receiver for the time range, maybe isolating it from the rest of the image according to #shouldIsolate, and answer the a MEMORY SLICE of the results. If aBlock signals an exception that can handled by the exceptionHandler for any point in time, evaluate exceptionBlock with a memory slice of the exceptions.
	NOTE: Unhandled errors raised by aBlock will bubble up along the sender stack, but still, all handling might be isolated until the exception will have been resumed. This can mean that even the pop-up of the eventual debugger will be isolated and thus invisible to you! Thus make sure to pass all relevant exceptions with this message."

	| resultAndException |
	resultAndException := self basicEvaluate: [
		| result exception |
		[result := aBlock value]
			on: exceptionHandler
			do: [:ex | exception := ex].
		{result. exception}].
	
	(resultAndException rawValues anySatisfy: [:each | each second notNil]) ifTrue:
		[^ exceptionBlock cull: (resultAndException collect: [:each | each second])].
	
	^ resultAndException rawNoCoalesceCollect: [:each | each first]