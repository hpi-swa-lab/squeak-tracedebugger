examples
exampleParseRegexDemo2

	| stream cursor positions |
	stream := '(a?(a?))[Qa-z\d}+](?=z:notNil:)' readStream.
	cursor := TDBCursor traceForBlock: [RxParser new parseStream: stream].
	positions := cursor object: stream collect: #position.
	^ (((positions timesAndValues collect: [:position | | text |
		text := stream contents asText.
		position > 0 ifTrue:
			[text
				addAllAttributes: {TextEmphasis bold. TextColor color: Color blue}
				from: position
				to: position].
		text])
			associations collect: [:assoc |
				| context |
				context := assoc key first > 0 ifTrue: [(cursor contextAtTime: assoc key first) stack at: 4].
				'{1}	{3}' asText format:
					{assoc value.
					assoc key.
					context ifNotNil:
						[context asString tdbAsTextWithAttribute:
							(PluggableTextAttribute evalBlock:
								[(cursor debugAtTime: assoc key first) model selectContext: context])]}])
		fold: [:a :b | a , String cr , b]) edit.