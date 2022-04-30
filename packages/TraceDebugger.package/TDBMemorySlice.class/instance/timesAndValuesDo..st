enumerating
timesAndValuesDo: aBlock

	intervals with: rawValues do: [:interval :rawValue |
		interval do: [:timeIndex |
			aBlock value: timeIndex value: (memory object: rawValue atTime: timeIndex)]].