controlling
context: aContext step: aBlock
	"Wrap the next step of aContext with recording of the prior context state."

	| oldPC result oldStack oldSize |
	oldPC := aContext pc.
	oldStack := aContext tdbVariableStack copy.
	
	timeIndex := timeIndex + 1.
	result := super context: aContext step: aBlock.
	
	aContext pc = oldPC ifFalse:
		[memory object: aContext priorTo: timeIndex instVarAt: 2 "pc" put: oldPC].
	oldSize := oldStack size.
	memory object: aContext priorTo: timeIndex instVarAt: 3 "stackp" put: oldSize.
	self flag: #optimize. "Could we cache indexed accesses in the relevant primitives?"
	1 to: oldSize do: [:i |
		memory object: aContext priorTo: timeIndex fieldAt: i put: (oldStack at: i)].
	"Note: We neglect the complex internal structure of the stack variables collection in SimulationContext here but assume it as a single variable instance just like an ordinary Context. As a consequence, memory lookups for a not yet decustomized context will not report the correct stack variables."
	
	^ result