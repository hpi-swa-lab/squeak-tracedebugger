labels & details
detailsTextForLeaves: contextSliceLeaves fromRoot: rootContextSlice

	^ Text streamContents: [:stream |
		stream
			withAttributes: (self tdbAttributesForStyle: self styleForHeader)
			do:
				[stream
					print: contextSliceLeaves size;
					nextPutAll: ' values'].
		
		self
			printDetailsTextForLeaves: contextSliceLeaves
			fromRoot: rootContextSlice
			on: stream
			getText: [:contextSlice |
				| result |
				result := self resultForContextSlice: contextSlice.
				self detailsTextForResult: result fromRoot: contextSlice]
			selectAction: [:contextSlice | self selectContextSlice: contextSlice]]