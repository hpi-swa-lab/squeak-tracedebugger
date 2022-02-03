private - stepping
stepUntil: aBlock

	| context start |
	context := self context.
	start := context.
	[aBlock cull: context] whileFalse:
		[self step.
		context := self context.
		
		"Detect unhandled errors. If there is any, it has already been set to the end and will not raise a debugger. See TDBTrace >> #defangUnhandledErrorIfAny."
		self flag: #moveUpstream. "This implementation has fewer limitations than the original one in Process >> #stepToHome:. See TDBCursorTest >> #testDoStepOverUnhandledSignalerContext etc."
		(context selector = #defaultAction
			and: [context willReturn]
			and: [(context objectClass: context receiver) includesBehavior: UnhandledError])
				ifTrue:
					[| unhandledError exception haltContext |
					unhandledError := context receiver.
					exception := context object: unhandledError instVarAt:
						(UnhandledError instVarIndexFor: #exception ifAbsent: [self error]).
					(((context objectClass: exception) includesBehavior: Exception)
						and: [exception canSearchForSignalerContext])
							ifFalse: [
								"Something is wrong here, early exit."
								^ self].
					
					"Navigate back to the most appropriate context, i.e., usually the signalerContext. If the user has stepped into the signaling, choose a finer-grained context instead."
					haltContext := exception signalerContext
						ifNil: [
							"Something is wrong here, early exit."
							^ self].
					(start hasSender: haltContext)
						ifTrue: [haltContext := unhandledError signalerContext].
					(start hasSender: haltContext)
						ifTrue: [^ self].
					
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
											self step.
											(aBlock cull: (context := self context))
												ifTrue: [^ self]]]].
					^ self]].