menus
mainSliceContextMenu: menu
	<contextSliceMenuShifted: false>

	self selectedContextSlice ifNotNil: [:selectedSlice |
		menu
			add: 'debug (D)' action: #debug.
	
		(self isDisplayedAsLeaf: selectedSlice) ifTrue:
			[(self resultForContextSlice: selectedSlice) hasError
				ifFalse:
					[menu
						add: 'inspect snapshot (i)' action: #inspectSnapshot;
						add: 'explore snapshot (I)' action: #exploreSnapshot]
				ifTrue:
					[menu
						add: 'debug snapshot' action: #debugSnapshot]].
	
		menu addLine].
	
	menu
		add: 'compact labels'
		subMenu:
			(self contextLabelCompactionMenu:
				(menu tdbMakeSubmenuForTarget: self))
		target: self
		selector: #yourself
		argumentList: #().
	
	^ menu