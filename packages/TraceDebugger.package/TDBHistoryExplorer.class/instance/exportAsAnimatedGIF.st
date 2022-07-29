support
exportAsAnimatedGIF

	| filename |
	filename := Project uiManager
		saveFilenameRequest: 'Export history as animation'
		initialAnswer: ('{1}.gif' format: {self labelString}).
	filename ifNil: [^ self].
	^ self exportAsAnimatedGIFNamed: filename