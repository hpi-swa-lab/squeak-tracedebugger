evaluating
debugExpression: aStringOrText requestor: requestor
	"Overridden to provide access to instance variables. Default #evaluate:in:to:environment:notifying:ifFail:logged: uses a mirror primitive which reveals the instance variables of the TDBProxy receiver instead. Note: Like in #evaluateExpression:requestor:, assure that the expression will be simulated to enable access to instance variables of the proxied receiver."

	| compilationCue methodNode compiledMethod helperProcess |
	compilationCue := self newCompilationCueFor: aStringOrText requestor: requestor.
	methodNode := [compilationCue getClass evaluatorClass new
		compileCue: compilationCue
		noPattern: true
		ifFail: [requestor flash. ^ nil]] 
			on: OutOfScopeNotification 
			do: [:ex | ex resume: true].
	compiledMethod := methodNode generateWithTempNames.
	
	helperProcess := compilationCue context
		ifNil:
			[self assert: compiledMethod selector = #DoIt.
			Process forMethod: compiledMethod receiver: compilationCue receiver]
		ifNotNil:
			[self assert: compiledMethod selector = #DoItIn:.
			Process forMethod: compiledMethod receiver: compilationCue receiver arguments: {compilationCue context}].
	(compilationCue receiver in: [:rcvr |
		thisContext isSimulationContext ifTrue: [thisContext simulator]]) ifNotNil: [:simulator |
			helperProcess suspendedContext
				becomeForward: (simulator tdbproxyYourself customize: helperProcess suspendedContext)
				copyHash: true].
		
	helperProcess debugWithTitle: 'Debug it'.