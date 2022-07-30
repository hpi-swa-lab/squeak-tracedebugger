examples
exampleMorphConstruction
	"See also TDBHistoryExplorer exampleMorphConstruction."

	| cursor morph screenshots text |
	cursor := TDBCursor traceForBlock: [morph := WatchMorph new].
	screenshots := (cursor
		object: morph
		collect: [:ea | [ea imageForm] ifError: [:ex | nil]])
			timesAndValues.
	text := Text streamContents: [:stream |
		screenshots keysAndValuesDo: [:interval :form |
			stream
				nextPutAll: ((cursor contextAtTime: interval first) findContextSuchThat: [:c | c methodClass ~= Morph]) printString;
				cr.
			form ifNotNil:
				[self flag: #todo. "Why do we have to copy the form?"
				stream withAttribute: form copy tdbproxyYourself asTextAnchor do:
					[stream nextPut: Character startOfHeader]].
			stream cr; cr]].
	
	text edit.