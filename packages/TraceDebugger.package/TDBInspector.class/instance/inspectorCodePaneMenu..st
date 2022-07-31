code pane menu
inspectorCodePaneMenu: aMenu
	<codePaneMenu>
	<menuPriority: 200>

	^ aMenu
		add: 'add as field' target: self selector: #addCodeSelectionAsField;
		balloonTextForLastItem: 'add the selected expression to the field list';
		add: 'explore expression history' target: self selector: #exploreCodeSelectionHistory;
		balloonTextForLastItem: 'open a window on the history of the selected expression';
		addLine;
		yourself