examples
exampleMatchRegex

	| stream cursor positions |
	stream := 'this is a text with multiple words' readStream.
	cursor := TDBCursor traceForBlock: ['\w{5,}' asRegex searchStream: stream].
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
				context := assoc key first > 0 ifTrue: [(cursor contextAtTime: assoc key first) stack at: 2].
				'{1}	{3}' asText format:
					{assoc value.
					assoc key.
					context ifNotNil:
						[context asString tdbAsTextWithAttribute:
							(PluggableTextAttribute evalBlock:
								[(cursor debugAtTime: assoc key first) model selectContext: context])]}])
		fold: [:a :b | a , String cr , b]) edit.