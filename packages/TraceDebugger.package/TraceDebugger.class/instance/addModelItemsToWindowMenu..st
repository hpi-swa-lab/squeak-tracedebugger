toolbuilder
addModelItemsToWindowMenu: menu

	super addModelItemsToWindowMenu: menu.
	
	"See #contentsSymbolQuints."
	menu tdbRemoveAllSelectors: #(offerWhatToShowMenu).