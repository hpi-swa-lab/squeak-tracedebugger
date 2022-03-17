accessing - descendants
withAllDescendantsDepthFirstDo: aBlock

	aBlock value: self.
	self children do: [:child |
		child withAllDescendantsDepthFirstDo: aBlock]