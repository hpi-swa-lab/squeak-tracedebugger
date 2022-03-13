accessing - toolbuilder
contextInfoToolTipFor: aContext

	| originalContext styler |
	originalContext := self cursor object: aContext atTime:
		(self cursor minTimeIndexFor: aContext).
	
	styler := ((TextStyler for: #Smalltalk) ifNil: [TDBNullStyler]) new
		classOrMetaClass: (originalContext receiver perform: #class);
		context: originalContext;
		parseAMethod: false;
		yourself.
	
	^ Text streamContents: [:stream |
		(self contextInfosFor: originalContext)
			associations do: [:assoc |
				stream nextPutAll:
					(styler styledTextFor: assoc key asText).
				assoc key = #'^' ifFalse:
					[stream nextPut: $:].
				stream space.
				
				stream nextPutAll:
					([[assoc value printStringLimitedTo: 100]
						valueWithin: 10 milliSeconds
						onTimeout: ['a {1} <printString timed out>' format: {thisContext objectClass: assoc value tdbproxyYourself}]]
							ifError: [:msg | '<error: {1}>' format: {msg}])]
			separatedBy: [stream cr]]