private
stepToSendOrReturn

	| start |
	start := self context.
	start isDead ifTrue: [^ self].
	
	self stepUntil: [:context |
		context ~= start
			or: [start willReallySend]
			or: [start willReturn]
			or: [start willReallyStore]].