enumerating
timesAndValuesCollect: aBlock

	^ Array new: self size streamContents: [:stream |
		intervals with: rawValues do: [:interval :rawValue |
			interval do: [:timeIndex |
				stream nextPut:
					(aBlock value: timeIndex value: (memory object: rawValue atTime: timeIndex))]]]