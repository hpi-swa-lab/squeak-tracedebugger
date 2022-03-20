fields
fieldSignalerContexts
	
	^ (self newFieldForType: #list key: #signalerContexts)
		name: 'signaler contexts'; emphasizeName;
		valueGetter: [:ctxt | ctxt tdbSignalerContexts collect: #sender];
		yourself