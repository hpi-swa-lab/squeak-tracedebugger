*TraceDebugger-UI-debugging
traceAndDebugOnce
	"Evaluate the receiver and answer the result. Trace the evaluation and display the result in a trace debugger unless we already done it once, similarly to #haltOnce."

	| result |
	self haltOnceEnabled ifFalse: [^ self value].
	self clearHaltOnce.
	[result := self value] traceAndDebug.
	^ result