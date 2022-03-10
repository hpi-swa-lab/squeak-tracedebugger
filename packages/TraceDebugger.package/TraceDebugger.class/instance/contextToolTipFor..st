accessing - toolbuilder
contextToolTipFor: aContext

	| tips |
	thisContext wrap: [:block | self computeViewPropertyString: block].
	
	tips := OrderedCollection new: 2.
	self cursor
		returnValueFor: aContext
		ifPresent: [:value | | valueString |
			valueString := [value printStringLimitedTo: 100]
				ifError: [:msg | '<error: {1}>' format: {msg}].
			tips add: ('<b>Return value:</b> {1}' asTextFromHtml format: {valueString})].
	
	Preferences balloonHelpInMessageLists ifTrue:
		[(self messageHelpForMethod: aContext homeMethod) ifNotNil: [:help |
			tips add: help]].
	
	tips ifEmpty: [^ nil].
	^ tips fold: [:a :b | a , String cr, String cr, b]