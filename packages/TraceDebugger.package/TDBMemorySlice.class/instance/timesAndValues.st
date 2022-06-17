accessing
timesAndValues

	^ (self timesAndValuesCollect: [:timeIndex :value | timeIndex -> value])
		as: OrderedDictionary