code pane menu
inspectorCodePaneMenu: aMenu
	<codePaneMenu>
	<menuPriority: 200>

	^ aMenu
		add: 'add as field' target: self selector: #addSelectionAsField;
		addLine;
		yourself