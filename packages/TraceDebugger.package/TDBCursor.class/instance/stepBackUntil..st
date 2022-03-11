private - stepping
stepBackUntil: aBlock
	"Step backward until aBlock evaluates to true for the active context, or until the begin of the trace has been reached. Answer the new current context or nil if the beginning of the trace has been reached."

	| context start |
	context := self context.
	start := context.
	[aBlock cull: context] whileFalse:
		[self stepBack ifNil: [^ nil].
		context := self context.
		
		self flag: #todo "unhandled errors?"].
	^ context