accessing
withAllDescendantsBreadthFirstDo: aBlock

	aBlock value: self.
	self allDescendantsBreadthFirstDo: aBlock.