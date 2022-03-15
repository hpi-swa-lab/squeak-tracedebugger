private
updateMaxTimeIndex: timeIndex from: aTrace

	#optimized. "Copied from superclass to avoid super send"
	
	self == aTrace ifFalse:
		[self children last value == aTrace ifFalse: [^ self]].
	
	timeIndex > maxTimeIndex
		ifFalse: [^ self].
	maxTimeIndex := timeIndex.
	
	self parent updateMaxTimeIndex: maxTimeIndex from: self.