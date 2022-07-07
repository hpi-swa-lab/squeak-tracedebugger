evaluating
debugExpression: aStringOrText requestor: requestor
	"Overridden to provide access to instance variables. Default #evaluate:in:to:environment:notifying:ifFail:logged: uses a mirror primitive which reveals the instance variables of the TDBProxy receiver instead. Note: Like in #evaluateExpression:requestor:, assure that the expression will be simulated to enable access to instance variables of the proxied receiver. Experimental."

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
			[compiledMethod valueWithReceiver: compilationCue receiver tdbproxyYourself arguments: {}] newProcess]
		ifNotNil:
			[self assert: compiledMethod selector = #DoItIn:.
			[compiledMethod valueWithReceiver: compilationCue receiver tdbproxyYourself arguments: {compilationCue context tdbproxyYourself}] newProcess].
	(compilationCue receiver in: [:rcvr |
		thisContext isSimulationContext ifTrue: [thisContext simulator]]) ifNotNil: [:simulator |
			TDBExperimentalDebugRetracingWarning signal: 'Experimental feature! This will debug the retracing simulator. The expression should be evaluated correctly, but the debugger''s inspectors might show improper values. Use the context variable inspector on the right to be sure, or perform queries against ThisContext simulator. Suppress this warning if you don''t care.'.
			helperProcess suspendedContext
				becomeForward: (simulator tdbproxyYourself customize: helperProcess suspendedContext)
				copyHash: true].
		
	helperProcess
		runUntil: [:context | context method == compiledMethod];
		debugWithTitle: 'Debug retracing (experimental)'.