*TraceDebugger-UI-event handling-override
dropSourceCode: anObject event: evt

	| tool window |
	self flag: #(override moveUpstream). "Preview for genericDropSourceCode.cs. See: http://lists.squeakfoundation.org/pipermail/squeak-dev/2022-January/218665.html"
	
	(anObject isMethodReference and: [anObject isValid])
		ifTrue: [^ self dropSourceCode: anObject compiledMethod event: evt].
	
	anObject isString
		ifTrue: [^ anObject edit].
	
	tool := (anObject isBehavior or: [anObject isCompiledMethod])
		ifTrue: [
			anObject isBehavior
				ifTrue: [Browser new
					setClass: anObject]
				ifFalse: [CodeHolder new
					setClass: anObject methodClass
					selector: anObject selector]]
		ifFalse: [anObject browse].
	
	window := tool containingWindow ifNil: [ToolBuilder open: tool].
	window center: evt position.
	window bounds: (window bounds translatedToBeWithin: self bounds).