menus
debuggerCodePaneMenu: menu
	<codePaneMenu>
	<menuPriority: 200>

	^ menu
		add: 'run to here' target: self selector: #runToSelection: argument: self codePaneSelectionInterval;
		addLine;
		yourself