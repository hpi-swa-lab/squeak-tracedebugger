accessing
atTime: timeIndex putChild: aTrace

	children at: timeIndex put: aTrace.
	self noteNewDescendant: aTrace.
	^ aTrace