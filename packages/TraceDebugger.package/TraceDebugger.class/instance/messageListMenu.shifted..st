menus
messageListMenu: menu shifted: shifted
	"The context-stack menu takes the place of the message-list menu in the debugger, so pass it on"

	^ self contextStackMenu: menu shifted: shifted