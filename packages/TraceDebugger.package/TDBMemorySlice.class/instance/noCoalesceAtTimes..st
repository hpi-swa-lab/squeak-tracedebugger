accessing
noCoalesceAtTimes: timeIndices
	"Answer a slice containing all values of the receiver that are within the requested timeIndices. The result might the receiver itself or a new slice."

	self times = {timeIndices} ifTrue: [^ self].
	^ self noCoalesceCopyAtTimes: timeIndices