morphic ui
aboutToStyle: styler requestor: requestor

	| result |
	result := self inspector aboutToStyle: styler requestor: requestor.
	styler classOrMetaClass: self selectedClassOrMetaClass.
	^ result