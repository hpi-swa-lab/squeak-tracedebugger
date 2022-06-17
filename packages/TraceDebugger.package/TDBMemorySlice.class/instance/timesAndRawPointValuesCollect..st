enumerating - raw values
timesAndRawPointValuesCollect: aBlock

	^ Array new: self size streamContents: [:stream |
		intervals with: rawValues do: [:interval :rawValue |
			interval do: [:timeIndex |
				stream nextPut:
					(aBlock value: timeIndex value: rawValue)]]]