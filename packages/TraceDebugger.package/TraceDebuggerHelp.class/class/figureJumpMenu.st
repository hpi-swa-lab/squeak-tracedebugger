figures
figureJumpMenu

	^ self takeScreenshotWithContextMenu: [:menu |
		menu imageFormForRectangle:
			(((menu items
				select: [:item | item contents beginsWith: 'jump']
				thenCollect: #fullBoundsInWorld)
					fold: #merge:)
						outsetBy: 16 @ 3)]