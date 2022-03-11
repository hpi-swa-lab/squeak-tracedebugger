support
invokeMenu: menuBlock matching: matchString

	| match matches menu |
	menu := menuBlock value: PluggableMenuSpec new.
	matches := menu items select: [:item | matchString match: item label].
	self assert: 1 equals: matches size.
	
	match := matches first.
	match action value.