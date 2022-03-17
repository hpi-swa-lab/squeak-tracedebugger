accessing - descendants
withAllDescendantsBreadthFirst

	^ Generator on: [:stream |
		self withAllDescendantsBreadthFirstDo: [:trace |
			stream nextPut: trace]]