private - stepping
stepUntil: aBlock
	"Step forward until aBlock evaluates to true for the active context, or until the execution has been completed. If an unhandled error is raised on the way, try to fast-forward to its signaler context. Answer the new current context or nil if the execution has completed."

	| context start |
	context := self context.
	start := context.
	[aBlock cull: context]
		whileFalse:
			[self step ifNil: [^ nil].
			context := self context.
			
			"Detect unhandled errors."
			(context selector = #defaultAction
				and: [context willReturn]
				and: [(context objectClass: context receiver) includesBehavior: UnhandledError])
					ifTrue:
						[^ self stepOverUnhandledError: context from: start until: aBlock]].
	^ context