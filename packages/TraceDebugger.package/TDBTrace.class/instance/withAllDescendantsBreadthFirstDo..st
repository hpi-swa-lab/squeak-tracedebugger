accessing - descendants
withAllDescendantsBreadthFirstDo: aBlock

	aBlock value: self.
	self allDescendantsBreadthFirstDo: aBlock.