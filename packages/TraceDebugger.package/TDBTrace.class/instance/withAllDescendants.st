accessing
withAllDescendants

	^ Generator on: [:stream |
		self withAllDescendantsDo: [:trace |
			stream nextPut: trace]]