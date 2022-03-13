accessing - toolbuilder
contextToolTipFor: aContext

	| tips |
	thisContext wrap: [:block | self computeViewPropertyString: block].
	
	tips := OrderedCollection new: 2.
	
	tips add: (self contextInfoToolTipFor: aContext).
	
	Preferences balloonHelpInMessageLists ifTrue:
		[(self messageHelpForMethod: aContext homeMethod) ifNotNil: [:help |
			tips add: help]].
	
	tips ifEmpty: [^ nil].
	^ tips fold: [:a :b | a , String cr, String cr, b]