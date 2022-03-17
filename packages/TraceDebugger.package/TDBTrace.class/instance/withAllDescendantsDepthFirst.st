accessing - descendants
withAllDescendantsDepthFirst

	^ Generator on: [:stream |
		self withAllDescendantsDepthFirstDo: [:trace |
			stream nextPut: trace]]