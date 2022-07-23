labels & details
printDetailsTextForLeaves: contextSliceLeaves fromRoot: rootContextSlice on: aTextStream getText: textBlock selectAction: selectBlock
		
	contextSliceLeaves withIndexDo: [:contextSlice :index |
		| text |
		aTextStream cr; cr.
		aTextStream
			withAttribute:
				(PluggableTextAttribute evalBlock:
					[selectBlock value: contextSlice])
			do:
				[aTextStream nextPutAll:
					(contextSlice newPrinter
						compact: true;
						root: rootContextSlice;
						makeString)].
		aTextStream
			nextPutAll: ' (';
			withAttribute:
				(PluggableTextAttribute evalBlock:
					[self debug: contextSlice])
				do:
					[aTextStream nextPutAll: 'debug'];
			nextPutAll: ')'.
		
		text := textBlock value: contextSlice.
		aTextStream cr.
		aTextStream nextPutAll: text].