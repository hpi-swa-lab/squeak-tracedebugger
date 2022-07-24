examples
exampleDrawing

	| cursor screenshot screenshots text |
	cursor := TDBCursor traceForBlock: [screenshot := WatchMorph new imageForm].
	screenshots := (cursor
		object: screenshot
		collect: [:ea | [ea copy: ea relativeRectangle] ifError: []])
			timesAndValues.
	text := Text streamContents: [:stream |
		screenshots associations
			do: [:assoc | | interval form |
				interval := assoc key.
				form := assoc value.
				stream
					nextPutAll: ((cursor contextAtTime: interval first) findContextSuchThat: [:c | (c receiver isKindOf: BitBlt) not]) printString;
					cr.
				form ifNotNil:
					[stream withAttribute: form copy tdbproxyYourself asTextAnchor do:
						[stream nextPut: Character startOfHeader]].
				stream cr; cr]
			displayingProgress: 'Building screenshots...'].
	
	text edit.