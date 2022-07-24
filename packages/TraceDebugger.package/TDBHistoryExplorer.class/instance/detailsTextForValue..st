labels & details
detailsTextForValue: value

	self flag: #rangeRetracingForkAccess. "We would want to use non-local returns here which would send #aboutToReturn:through: which is currently not supported during range retracing."
	
	^ [true
		caseOf:
			{[value isText] -> [self detailsTextForTextValue: value].
			[value isForm] -> [self detailsTextForFormValue: value].
			[value isMorph] -> [self detailsTextForMorphValue: value]}
		otherwise: [self detailsTextForObjectValue: value]]
			on: self commonErrors do: [:ex |
				self errorText: 'display error' exception: ex]