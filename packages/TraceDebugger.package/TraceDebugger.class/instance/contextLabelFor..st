accessing - toolbuilder
contextLabelFor: aContext

	| label |
	label := aContext printString.
	
	self shouldShowReturnValue ifTrue:
		[self cursor
			returnValueFor: aContext
			ifPresent: [:value |
				label := label, Character tab
					, ([value printStringLimitedTo: 80]
						ifError: [:msg | '<error: {1}' format: {msg}])]].
	
	(self cursor isContextAlive: aContext tdbproxyYourself) ifFalse:
		[label := label asText
			addAttribute: (TextColor color: self colorForDeadContext);
			yourself].
	
	^ label