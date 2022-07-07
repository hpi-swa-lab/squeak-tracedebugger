evaluating
aboutToStyle: styler requestor: anObject

	styler
		parseAMethod: false;
		classOrMetaClass: self object class;
		environment: self object environment;
		context: self context.
	^ anObject knownName = #codePane