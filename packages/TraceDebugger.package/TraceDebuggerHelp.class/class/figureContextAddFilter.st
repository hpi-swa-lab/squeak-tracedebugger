figures
figureContextAddFilter

	^ self takeScreenshotWithDebugger: [:debugger |
		| menu |
		menu := debugger contextAddFilterMenu: MenuMorph new.
		menu fullBounds.
		menu imageForm]