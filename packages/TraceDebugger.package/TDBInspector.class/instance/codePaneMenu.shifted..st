forwarding - value pane
codePaneMenu: menu shifted: shifted

	| fullMenu |
	fullMenu := self menu: menu for: #(codePaneMenu codePaneMenuShifted:) shifted: false.
	^ self inspector codePaneMenu: fullMenu shifted: shifted