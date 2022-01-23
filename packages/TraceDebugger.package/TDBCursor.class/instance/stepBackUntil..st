private
stepBackUntil: aBlock

	| context start |
	context := self context.
	start := context.
	[timeIndex <= 0 or: [aBlock cull: context]] whileFalse:
		[self stepBack.
		context := self context.
		
		self flag: #todo "unhandled errors?"].