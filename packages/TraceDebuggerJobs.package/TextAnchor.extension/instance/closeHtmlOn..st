*TraceDebuggerJobs-html-pseudo-override
closeHtmlOn: aStream

	| actualStream |
	actualStream := aStream instVarNamed: 'stream'.
	self assert: actualStream peekLast = Character startOfHeader.
	actualStream position: actualStream position - 1.
	
	aStream nextPutAll: '</img>'.