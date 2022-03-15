private
updateMaxTimeIndex: timeIndex from: aTrace

	self == aTrace ifFalse:
		[self children last value == aTrace ifFalse: [^ self]].
	
	timeIndex > maxTimeIndex
		ifFalse: [^ self].
	maxTimeIndex := timeIndex.