menus
contextFilterMenu: menu

	| editLabel filterCount |
	self hasContextSelected ifTrue:
		[menu
			add: 'add filter'
			subMenu: (self contextAddFilterMenu:
				(menu tdbMakeSubmenuForTarget: self))
			target: self
			selector: #yourself
			argumentList: #().
		menu balloonTextForLastItem: 'hide all contexts matching a given pattern\(their children will be lifted up)'].
	
	editLabel := 'edit filters'.
	filterCount := self contextFilter totalExcludedCount.
	filterCount > 0 ifTrue:
		[editLabel := '{1} ({2})' format: {editLabel. filterCount}].
	menu
		add: editLabel
		subMenu: (self contextEditFilterMenu:
			(menu tdbMakeSubmenuForTarget: self))
		target: self
		selector: #yourself
		argumentList: #().