accessing
withAllDescendantsDo: aBlock

	aBlock value: self.
	self allDescendantsDo: aBlock.