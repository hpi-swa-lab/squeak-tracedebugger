menus
contextMenuMore: menu shifted: shifted
	"The 'more...' link that toggles between shifted and unshifted menus."
	<contextMenu>
	<menuPriority: 1000>

	^ menu
		addLine;
		add: 'more...'
			target: self
			selector: #offerMenuFrom:shifted:
			argumentList: {#contextMenu:shifted:. shifted not};
		yourself