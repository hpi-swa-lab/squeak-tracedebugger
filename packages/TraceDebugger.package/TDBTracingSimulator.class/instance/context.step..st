controlling
context: aContext step: aBlock

	| oldSender oldPC result oldStack |
	oldSender := aContext sender.
	oldPC := aContext pc.
	oldStack := aContext tdbVariableStack copy.
	
	timeIndex := timeIndex + 1.
	result := super context: aContext step: aBlock.
	
	aContext sender == oldSender ifFalse:
		[memory object: aContext priorTo: timeIndex instVarAt: 1 "sender" put: oldSender].
	aContext pc = oldPC ifFalse:
		[memory object: aContext priorTo: timeIndex instVarAt: 2 "pc" put: oldPC].
	aContext tdbStack = oldStack ifFalse:
		[| size |
		size := oldStack size.
		memory
			object: aContext priorTo: timeIndex atSlot: 0 "size" put: size;
			object: aContext priorTo: timeIndex instVarAt: 3 "stackp" put: size.
		self flag: #optimize. "Could we cache indexed accesses in the relevant primitives?"
		1 to: size do: [:i |
			memory object: aContext priorTo: timeIndex atSlot: i put: (oldStack at: i)]].
	
	^ result