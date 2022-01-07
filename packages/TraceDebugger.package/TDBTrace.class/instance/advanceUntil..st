advancing
advanceUntil: aBlock

	| trace |
	trace := self.
	[trace isNil or: [aBlock cull: trace]] whileFalse:
		[trace := trace advance].
	^ trace