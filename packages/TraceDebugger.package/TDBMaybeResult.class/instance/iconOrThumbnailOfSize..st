thumbnail
iconOrThumbnailOfSize: aNumberOrPoint

	^ self
		ifError: [:error | ToolIcons iconNamed: error class theNonMetaClass toolIcon]
		ifResult: [nil]