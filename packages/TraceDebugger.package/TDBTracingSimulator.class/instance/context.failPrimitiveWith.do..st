controlling
context: aContext failPrimitiveWith: maybePrimFailToken do: aBlock

	memory object: aContext priorTo: timeIndex instVarAt: 2 "pc" put: aContext pc.
	
	^ super context: aContext failPrimitiveWith: maybePrimFailToken do: aBlock