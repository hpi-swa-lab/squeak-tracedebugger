*TraceDebugger-UI-menus
editMenu: menu for: aCursor

	(menu respondsTo: #title:) ifTrue:
		[menu
			title: 'Context filters';
			addStayUpItem].
	
	self propertiesAndPluralNamesDo: [:property :name |
		menu
			tdbAddUpdating:
				[| label count  |
				label := 'Filter {1}...' format: {name}.
				
				count := (self excludedItemsBy: property) size.
				count > 0 ifTrue:
					[label := '{1} ({2})' format: {label. count}].
				
				label]
			action: [self editExclusionsBy: property label: name forCursor: aCursor]].
	
	self totalExcludedCount > 0 ifTrue:
		[menu addLine.
		menu add: 'Reset filters' action:
			[| count |
			count := self totalExcludedCount.
			(self confirm: ('Are you sure you want to remove {1} {2}?'
				format: {count. 'filter' asPluralBasedOn: count}))
					ifTrue: [self reset]]].
	
	^ menu