figures
figureBorderMenu

	^ self takeScreenshotWithContextMenu: [:menu |
		menu imageFormForRectangle:
			(((menu items
				select: [:item | item contents includesSubstring: 'border']
				thenCollect: #fullBoundsInWorld)
					fold: #merge:)
						outsetBy: 16 @ 3)]