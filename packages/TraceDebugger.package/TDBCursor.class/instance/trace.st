accessing
trace

	"cached."
	currentTrace ifNotNil:
		[currentTrace key = self timeIndex
			ifTrue: [^ currentTrace value]].
	^ (currentTrace := self timeIndex ->
		(self rootTrace traceAtTime: self timeIndex))
			value