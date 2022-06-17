enumerating
timesAndValuesCollect: aBlock
	"Evaluate aBlock with each of the receiver's values and the corresponding time interval. Answer a collection of the results. Each collection item may be a transparent view (TDBRangeProxy)."

	^ Array new: self size streamContents: [:stream |
		self timesAndValuesDo: [:times :value |
			stream nextPut:
				(aBlock value: times value: value)]]