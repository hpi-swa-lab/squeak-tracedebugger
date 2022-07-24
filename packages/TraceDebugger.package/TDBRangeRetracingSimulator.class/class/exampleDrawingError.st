examples
exampleDrawingError

	| morph owner cursor screenshot screenshots text |
	morph := Morph new
		extent: 200 @ 200;
		borderWidth: 50;
		borderColor: Color red;
		cornerStyle: #rounded;
		cornerRadius: 20;
		yourself.
	owner := Morph new
		color: Color yellow;
		addMorph: morph;
		extent: morph extent + 20;
		yourself.
	morph center: owner center.
	cursor := TDBCursor traceForBlock: [screenshot := owner imageForm].
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