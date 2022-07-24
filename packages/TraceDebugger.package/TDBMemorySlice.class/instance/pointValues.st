accessing
pointValues
	"Answer a new collection of all distinct values in the receiver at every single point in time. Each collection item may be a transparent view (TDBProxy).
	See also #values."

	^ self timesAndPointValuesCollect: [:interval :value | value]