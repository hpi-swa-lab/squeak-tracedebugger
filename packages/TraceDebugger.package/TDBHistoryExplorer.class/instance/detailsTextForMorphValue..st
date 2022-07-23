labels & details
detailsTextForMorphValue: aMorph

	| text timeIndices |
	text := self detailsTextForObjectValue: aMorph.
	
	timeIndices := [thisContext simulator timeIndices] ifError: [nil].
	text := '{1}\\{2}' withCRs asText format:
		{text.
		'Show screenshot' tdbAsTextWithAttribute:
			(PluggableTextAttribute evalBlock:
				[| morph screenshot |
				morph := aMorph.
				timeIndices ifNotNil:
					[morph := morph tdbInMemory: self cursor memory atTimes: timeIndices withSideEffects: nil].
				screenshot := [morph imageForm] on: TDBRetracingFrayOut do: [:ex |
					self spawnMemorySlice: ex slice. nil].
				screenshot ifNotNil:
					[self flag: #proxyHacks.
					screenshot copy tdbproxyYourself openAsMorph]])}.
	
	^ text