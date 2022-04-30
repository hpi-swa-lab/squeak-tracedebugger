enumerating
intervalsAndRawValuesCollect: aBlock

	^ Array new: self size streamContents: [:stream |
		intervals with: rawValues do: [:interval :rawValue |
			stream nextPut:
				(aBlock value: interval value: rawValue)]]