advancing
advanceUntil: aBlock
	"Advance the active trace, starting from the receiver, until aBlock evaluates to true. Answer the subsequently active trace, or nil if the execution has been completed."

	| trace |
	trace := self.
	[aBlock cull: trace] whileFalse:
		[trace := trace advance].
	^ trace