building
findPathIfShort: aBlock

	| displayPath |
	displayPath := self root = #parent
		ifTrue:
			["path to parent"
			self contextTreeSlice path]
		ifFalse:
			["path to specified root"
			| parents |
			parents := self contextTreeSlice withAllParents.
			self root ifNotNil:
				[parents := parents tdbWithoutPrefix: self root withAllParents].
			parents gather: #path].
	
	displayPath last isNumber ifTrue:
		[displayPath size = 1 ifTrue:
			[^ aBlock cull: displayPath last].
		displayPath := displayPath allButLast].
	
	^ displayPath