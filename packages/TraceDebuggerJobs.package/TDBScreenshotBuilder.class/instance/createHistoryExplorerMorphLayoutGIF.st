screenshots
createHistoryExplorerMorphLayoutGIF

	| explorer window |
	window := TDBHistoryExplorer exampleMorphLayout.
	thisContext insertEnsure: [window delete].
	explorer := window model.
	
	explorer exportAsAnimatedGIFNamed: 'screenshots/exampleMorphLayout.gif'.