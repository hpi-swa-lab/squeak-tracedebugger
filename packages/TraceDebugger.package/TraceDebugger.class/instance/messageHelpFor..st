accessing - toolbuilder
messageHelpFor: aContext
	
	Preferences balloonHelpInMessageLists ifFalse: [^ nil].
	
	^ self messageHelpForMethod: aContext homeMethod