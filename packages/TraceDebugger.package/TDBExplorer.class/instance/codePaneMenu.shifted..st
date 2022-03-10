forwarding - code pane
codePaneMenu: menu shifted: shifted

	| fullMenu |
	fullMenu := self menu: menu for: #(codePaneMenu codePaneMenuShifted:) shifted: false.
	^ self explorer codePaneMenu: fullMenu shifted: shifted