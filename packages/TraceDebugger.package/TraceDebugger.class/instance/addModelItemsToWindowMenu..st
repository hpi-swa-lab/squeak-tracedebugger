menus
addModelItemsToWindowMenu: menu

	super addModelItemsToWindowMenu: menu.
	
	"See #contentsSymbolQuints."
	menu tdbRemoveAllSelectors: #(offerWhatToShowMenu) reverse: true.
	
	menu addLine.
	menu
		add: 'inspect process' translated target: self process action: #inspect;
		add: 'explore process' translated target: self process action: #explore;
		add: 'terminate process' translated target: self action: #terminateProcess;
		balloonTextForLastItem: 'other than Abandon, this will allow the active context to unwind first.' translated.
	
	menu defaultTarget: self.
	
	menu addLine.
	menu
		add: 'send feedback...' action: #sendFeedback;
		balloonTextForLastItem: 'make the author happy by giving him some feedback'.
	menu
		add: 'edit preferences' action: #openPreferences;
		add: 'show help' action: #showHelp.
	menu
		add: 'self-update' action: #doSelfUpdate;
		balloonTextForLastItem: ('download and install the latest updates for {1}' format: {self appName}).