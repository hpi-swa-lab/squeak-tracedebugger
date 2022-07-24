accessing
assureResult

	^ self
		ifError: [:ex | ex signal]
		ifResult: [:res | res]