tests - support
testExportAsAnimatedGIF
	<timeout: 10 "seconds">

	| text filename |
	text := self setUpCursorWithMorph.
	self newExplorer: [cursor exploreHistory: text expression: 'self imageForm'].
	
	#((1 2) (1 4)) do: [:path |
		explorer
			contextSlice: (self contextSliceAtPath: path)
			expanded: false].
	
	filename := FileDirectory default fullNameFor: ('tmp_{1}.gif' format: {self}).
	explorer exportAsAnimatedGIFNamed: filename.
	self addTearDown: [FileDirectory default deleteFileNamed: filename].
	self assert: 8 equals: (GIFReadWriter formsFromFileNamed: filename) frames size.