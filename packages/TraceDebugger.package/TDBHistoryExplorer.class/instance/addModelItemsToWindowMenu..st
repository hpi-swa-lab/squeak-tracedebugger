menus
addModelItemsToWindowMenu: menu

	super addModelItemsToWindowMenu: menu.
	menu addLine.
	
	menu defaultTarget: self.
	menu
		add: 'export as animated GIF file'
		action: #exportAsAnimatedGIF.