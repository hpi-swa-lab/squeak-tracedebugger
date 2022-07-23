labels & details - errors
errorText: type frayOut: aFrayOutError

	| values text valueTexts valuesText |
	values := aFrayOutError slice values.
	
	valueTexts := values collect: [:value |
		[value asStringOrText]
			on: self commonErrors
			do: [:ex | self errorText: 'printString error:' exception: ex]].
	valuesText := Text streamContents: [:stream |
		valueTexts
			do: [:eachText | stream nextPutAll: eachText]
			separatedBy: [stream nextPutAll: ', ']].
	text := ('<{1}: {2}>' asText format: {type.  valuesText}).
	text addAllAttributes: (self tdbAttributesForStyle: self styleForError).
	^ text