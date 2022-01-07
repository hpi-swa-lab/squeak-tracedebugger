accessing - toolbuilder
messageIconFor: aContext

	self showMessageIcons
		ifFalse: [^ nil].
	
	self flag: #ui. "Consider appropiate use of icons"
	^ nil