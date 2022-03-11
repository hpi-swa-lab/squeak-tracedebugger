morphic ui
aboutToStyle: styler requestor: requestor

	| result |
	result := super aboutToStyle: styler requestor: requestor.
	styler classOrMetaClass: self selectedClassOrMetaClass.
	^ result