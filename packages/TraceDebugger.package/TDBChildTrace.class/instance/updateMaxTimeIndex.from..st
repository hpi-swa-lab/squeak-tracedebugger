private
updateMaxTimeIndex: timeIndex from: aTrace

	super updateMaxTimeIndex: timeIndex from: aTrace.
	
	self parent updateMaxTimeIndex: maxTimeIndex from: self.