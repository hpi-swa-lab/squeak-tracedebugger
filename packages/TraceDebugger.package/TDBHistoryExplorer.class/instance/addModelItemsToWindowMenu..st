menus
addModelItemsToWindowMenu: menu

	super addModelItemsToWindowMenu: menu.
	menu addLine.
	
	menu defaultTarget: self.
	menu
		add: 'export as animated GIF file'
		action: #exportAsAnimatedGIF.
	
	menu addLine.
	menu
		add: 'show help' action: #showHelp;
		add: 'send feedback...' action: #sendFeedback;
		balloonTextForLastItem: 'make the author happy by giving him some feedback'.