asserting - toolbuilder
validateMenu: menu

	menu ifNil: [^ self].
	
	self shouldntRaise: [menu imageForm].
	self deny: menu items isEmpty.
	
	menu items do: [:item |
		self deny: (item contents includesSubstring: 'failed').
		self validateMenu: item subMenu].