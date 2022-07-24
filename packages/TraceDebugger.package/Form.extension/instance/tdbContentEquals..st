*TraceDebugger-UI-comparing
tdbContentEquals: anotherObject

	(self class = Form and: [anotherObject class = Form])
		ifFalse: [^ self = anotherObject].
	
	^ {self width. self height. self offset. self bits}
		= {anotherObject width. anotherObject height. anotherObject offset. anotherObject bits}