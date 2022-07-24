accessing
values
	"Answer a new collection of all distinct values in the receiver. Each collection item may be a transparent view (TDBRangeProxy)."

	^ self timesAndValuesCollect: [:interval :value | value]