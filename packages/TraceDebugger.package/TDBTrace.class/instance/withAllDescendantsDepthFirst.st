accessing
withAllDescendantsDepthFirst

	^ Generator on: [:stream |
		self withAllDescendantsDepthFirstDo: [:trace |
			stream nextPut: trace]]