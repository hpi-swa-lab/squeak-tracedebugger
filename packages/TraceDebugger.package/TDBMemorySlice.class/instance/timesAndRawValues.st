accessing - raw values
timesAndRawValues

	^ (intervals with: rawValues collect: [:interval :rawValue | interval -> rawValue])
		as: OrderedDictionary