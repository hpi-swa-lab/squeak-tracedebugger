accessing - code pane
pcRangeIn: aContext

	aContext
		ifNil: [^ 1 to: 0].
	aContext isDead
		ifTrue: [^ 1 to: 0].
	^ aContext debuggerMap
		rangeForPC: aContext pc
		in: aContext method
		contextIsActiveContext:
			(aContext tdbIdentical: self interruptedContext)