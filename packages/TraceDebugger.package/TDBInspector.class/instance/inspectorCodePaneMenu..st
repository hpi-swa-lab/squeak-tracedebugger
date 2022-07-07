code pane menu
inspectorCodePaneMenu: aMenu
	<codePaneMenu>
	<menuPriority: 200>

	^ aMenu
		add: 'add as field' target: self selector: #addCodeSelectionAsField;
		add: 'explore expression history' target: self selector: #exploreCodeSelectionHistory;
		addLine;
		yourself