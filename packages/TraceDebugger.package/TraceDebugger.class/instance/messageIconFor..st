accessing - toolbuilder
messageIconFor: aContext

	| method |
	self showMessageIcons
		ifFalse: [^ nil].
	
	method := aContext homeMethod.
	^ ToolIcons iconNamed: (ToolIcons
		iconForClass: method methodClass
		selector: method selector)