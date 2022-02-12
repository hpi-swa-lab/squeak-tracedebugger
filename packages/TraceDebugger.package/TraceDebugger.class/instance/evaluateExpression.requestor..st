evaluating
evaluateExpression: aStringOrText requestor: requestor
	"Overridden to provide access to instance variables. Default #evaluate:in:to:environment:notifying:ifFail:logged: uses a mirror primitive which reveals the instance variables of the TDBProxy receiver instead."

	| compilationCue |
	compilationCue := self newCompilationCueFor: aStringOrText requestor: requestor.
	^ [compilationCue getClass evaluatorClass new
		evaluateCue: compilationCue
		ifFail: [requestor flash. ^ nil]
		logged: true] 
			on: OutOfScopeNotification 
			do: [ :ex | ex resume: true]