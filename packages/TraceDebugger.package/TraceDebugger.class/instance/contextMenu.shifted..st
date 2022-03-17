toolbuilder
contextMenu: aMenu shifted: shifted

	^ self
		menu: aMenu
		for: #(contextMenu contextMenuShifted:)
		shifted: shifted