menus
debuggerCodePaneMenu: aMenu
	<codePaneMenu>
	<menuPriority: 200>

	^ aMenu
		add: 'run to here' target: self selector: #runToSelection: argument: self codePaneSelectionInterval;
		addLine;
		yourself