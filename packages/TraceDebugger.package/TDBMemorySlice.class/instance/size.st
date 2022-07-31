accessing
size
	"Answer the total number of points in time represented by the receiver."

	^ self intervals detectSum: [:interval | interval size]