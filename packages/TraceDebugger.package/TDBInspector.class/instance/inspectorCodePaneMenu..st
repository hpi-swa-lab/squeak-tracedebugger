code pane menu
inspectorCodePaneMenu: aMenu
	<codePaneMenu>
	<menuPriority: 200>

	aMenu
		add: 'add as field' target: self selector: #addCodeSelectionAsField;
		balloonTextForLastItem: 'add the selected expression to the field list';
		add: 'explore expression history' target: self selector: #exploreCodeSelectionHistory;
		balloonTextForLastItem: 'open a window on the history of the selected expression'.
	self debugger isDisplayingHistory ifTrue:
		[self flag: #forLater. "support stepping forward until change of value"
		aMenu
			add: 'step to next change' target: self selector: #stepToNextChangeOfCodeSelection;
			balloonTextForLastItem: 'advance the debugger to the next change to the selected expression'].
	aMenu
		add: 'step to previous change' target: self selector: #stepToPreviousChangeOfCodeSelection;
		balloonTextForLastItem: 'rewind the debugger to the previous change to the selected expression';
		add: 'step to change...' target: self selector: #stepToChangeOfCodeSelection;
		balloonTextForLastItem: 'search the history of the selected expression and move the debugger to any selected change to the expression';
		addLine.
	^ aMenu