examples
exampleParseRegex

	| stream cursor |
	stream := '(a?(a?))[Qa-z\d}+](?=z:notNil:)' readStream.
	cursor := TDBCursor traceForBlock: [RxParser new parseStream: stream].
	^ ((((cursor object: stream collect:
		[:ea |
			[ea contents asText
				addAllAttributes: {TextEmphasis bold. TextColor color: Color red}
					from: ea position
					to: ea position;
				copy]
					on: Error do: [:ex | ex asStringOrText asText]])
		collect: [:t | [t asStringToHtml] ifError: [:ex | ex]])
			timesAndValuesCollect: [:interval :html |
				| context |
				context := interval first > 0 ifTrue: [(cursor contextAtTime: interval first) stack at: 4].
				'{1}	{3}' asText format:
					{html tdbproxyYourself asTextFromHtml.
					interval.
					context ifNotNil:
						[context asString tdbAsTextWithAttribute:
							(PluggableTextAttribute evalBlock:
								[(cursor debugAtTime: interval first) model selectContext: context])]}])
		fold: [:a :b | a , String cr , b]) edit.