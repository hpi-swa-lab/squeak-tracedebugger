controlling
context: aContext step: aBlock

	| oldSender oldPC result |
	oldSender := aContext sender.
	oldPC := aContext pc.
	
	timeIndex := timeIndex + 1.
	result := super context: aContext step: aBlock.
	
	aContext sender == oldSender ifFalse:
		[memory object: aContext priorTo: timeIndex instVarAt: 1 "sender" put: oldSender].
	aContext pc = oldPC ifFalse:
		[memory object: aContext priorTo: timeIndex instVarAt: 2 "pc" put: oldPC].
	
	^ result