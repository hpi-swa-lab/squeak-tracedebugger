private
requestContextLabelTruncationFor: label oldValue: truncation orCancel: cancelBlock

	| answer |
	answer := Project uiManager
		request: ('number of contexts to show {1} of truncation\({2} for no truncation)' withCRs
			format: {label. 0})
		initialAnswer: truncation asString.
	answer isEmptyOrNil ifTrue: [^ cancelBlock value].
	
	^ answer asNumber