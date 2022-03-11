menus
contextAddFilterMenu: menu

	^ self contextFilter
		addMenu: menu
		forContext: self selectedContext