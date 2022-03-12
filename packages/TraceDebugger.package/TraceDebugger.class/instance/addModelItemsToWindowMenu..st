toolbuilder
addModelItemsToWindowMenu: menu

	super addModelItemsToWindowMenu: menu.
	
	"See #contentsSymbolQuints."
	menu tdbRemoveAllSelectors: #(offerWhatToShowMenu) reverse: true.
	
	menu defaultTarget: self.
	
	menu addLine.
	menu
		add: 'self-update' action: #doSelfUpdate;
		balloonTextForLastItem: ('download and install the latest updates for {1}' format: {self appName}).
	menu
		add: 'send feedback...' action: #sendFeedback;
		balloonTextForLastItem: 'make the author happy by giving him some feedback'.