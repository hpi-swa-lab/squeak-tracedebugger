private - stepping
stepOverUnhandledError: aContext from: startContext until: aBlock
	"An unhandled error is being handled in aContext. Try to fast-forward the execution until a signaler context is reached in order to spare the user the implementation details of the Exception Handling System."

	| unhandledError exception haltContext context |
	"If there is any unhandled error, it has already been set to the end and will not raise a debugger. See TDBTrace >> #defangUnhandledErrorIfAny."
	self flag: #moveUpstream. "This implementation has fewer limitations than the original one in Process >> #stepToHome:. See TDBCursorTest >> #testDoStepOverUnhandledSignalerContext etc."
	
	unhandledError := aContext receiver.
	exception := aContext object: unhandledError instVarAt:
		(UnhandledError instVarIndexFor: #exception ifAbsent: [self error]).
	(((aContext objectClass: exception) includesBehavior: Exception)
		and: [exception canSearchForSignalerContext])
			ifFalse: [
				"Something is wrong here, early exit."
				^ aContext].
	
	"Navigate back to the most appropriate context, i.e., usually the signalerContext. If the user has stepped into the signaling, choose a finer-grained context instead."
	haltContext := exception signalerContext
		ifNil: [
			"Something is wrong here, early exit."
			^ aContext].
	(startContext hasSender: haltContext)
		ifTrue: [haltContext := unhandledError signalerContext].
	(startContext hasSender: haltContext)
		ifTrue: [^ aContext].
	
	[(context := self context) tdbIdentical: haltContext]
		whileFalse: [
			"{completeTo: context} + {aBlock}"
			| start2 trace |
			start2 := context.
			start2 isDead
				ifFalse:
					[trace := self traceFor: context.
					[(trace contextAtTime: self timeIndex) isDead]
						whileFalse: [
							self step ifNil: [^ nil].
							(aBlock cull: (context := self context))
								ifTrue: [^ context]]]].
	^ context