enumerating
withAllDescendantsAddTo: aCollection

	aCollection add: self.
	self children do: [:child |
		child withAllDescendantsAddTo: aCollection].