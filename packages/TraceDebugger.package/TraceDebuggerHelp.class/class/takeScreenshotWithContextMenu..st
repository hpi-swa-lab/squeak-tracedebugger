figures - private
takeScreenshotWithContextMenu: menuBlock

	^ self takeScreenshotWithDebugger: [:debugger :window |
		| menu tree |
		tree := window allMorphs detect: [:m | m knownName = #contextTree].
	
		menu := tree getMenu: false.
		menu fullBounds.
		menu items do: [:item | (item respondsTo: #updateContents) ifTrue: [item updateContents]].
		menu fullBounds.
		menuBlock value: menu]