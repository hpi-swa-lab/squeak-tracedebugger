*TraceDebugger-UI-displaying
tdbShowAfter: thresholdDuration while: aBlock
	"While evaluating the argument, aBlock, make the receiver be the cursor shape. The cursor is only displayed after the specified duration has expired. This is useful to avoid a lot of flashing pointers for fast operations while at the same time communicating slower operations to the user with a reasonable delay."

	| process |
	Processor activeProcess == Project uiProcess ifFalse: [^aBlock value].
	
	process := [| old |
	thresholdDuration wait.
	old := self class currentCursor.
	self show.
	[Processor activeProcess suspend] ensure:
		[old show]]
			forkAt: Processor activeProcess priority + 1.
	^ aBlock ensure:
		[process terminate]