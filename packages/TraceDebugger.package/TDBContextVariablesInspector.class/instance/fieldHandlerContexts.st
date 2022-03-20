fields
fieldHandlerContexts
	
	^ (self newFieldForType: #list key: #handlerContexts)
		name: 'handler contexts'; emphasizeName;
		valueGetter: [:ctxt | ctxt tdbHandlerContexts collect: #sender];
		yourself