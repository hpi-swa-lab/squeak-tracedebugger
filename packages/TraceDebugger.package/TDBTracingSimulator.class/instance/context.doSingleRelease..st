controlling
context: aContext doSingleRelease: aBlock

	memory object: aContext priorTo: timeIndex instVarAt: 1 "sender" put: aContext sender.
	memory object: aContext priorTo: timeIndex instVarAt: 2 "pc" put: aContext pc.
	
	^ super context: aContext doSingleRelease: aBlock