accessing
withAllDescendants

	^ Generator on: [:stream |
		stream nextPut: self.
		self children do: [:child |
			stream nextPutAll: child withAllDescendants]]