evaluating
aboutToStyle: styler requestor: requestor

	| result |
	result := self model aboutToStyle: styler requestor: requestor.
	styler classOrMetaClass: self selectedClassOrMetaClass.
	^ result