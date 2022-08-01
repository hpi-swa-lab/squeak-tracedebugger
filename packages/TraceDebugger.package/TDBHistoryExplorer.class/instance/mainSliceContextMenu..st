menus
mainSliceContextMenu: menu
	<contextSliceMenuShifted: false>

	self selectedContextSlice ifNotNil: [:selectedSlice |
		menu
			add: 'debug (D)' action: #debug;
			balloonTextForLastItem: 'open a new TraceDebugger on this context'.
		
		(self isDisplayedAsLeaf: selectedSlice) ifTrue:
			[(self resultForContextSlice: selectedSlice) hasError
				ifFalse:
					[menu
						add: 'inspect snapshot (i)' action: #inspectSnapshot;
						add: 'explore snapshot (I)' action: #exploreSnapshot].
			menu
				add: 'debug snapshot' action: #debugSnapshot;
				balloonTextForLastItem: 'debug the creation of the selected snapshot (experimental)'].
		
		menu addLine].
	
	menu
		add: 'compact labels'
			subMenu:
				(self contextLabelCompactionMenu:
					(menu tdbMakeSubmenuForTarget: self))
			target: self
			selector: #yourself
			argumentList: #();
		balloonTextForLastItem: 'Provides several options for controlling the width of the context tree. Play around with them to get a better understanding of the presentation.'.
	
	menu
		tdbAddUpdating: 'hide errors'
			getState: #shouldHideErrors
			setState: #shouldHideErrors:;
		balloonTextForLastItem: 'hide all values where the expression raised an error'.
	
	^ menu