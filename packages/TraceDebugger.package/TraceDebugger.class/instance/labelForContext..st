accessing - toolbuilder
labelForContext: aContext

	| label |
	label := aContext printString.
	(self cursor isContextAlive: aContext tdbproxyYourself)
		ifFalse: [label := label asText
			addAttribute: (TextColor color: self colorForDeadContext);
			yourself].
	^ label