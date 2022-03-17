evaluating
aboutToStyle: styler requestor: requestor

	| result |
	result := super aboutToStyle: styler requestor: requestor.
	styler classOrMetaClass: self selectedClassOrMetaClass.
	"Don't set context here because all context variables are parsed from the method source. Otherwise, we would also have a problem when user starts editing the method arguments."
	^ result