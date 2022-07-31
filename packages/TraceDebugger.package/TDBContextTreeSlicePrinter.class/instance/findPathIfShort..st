building
findPathIfShort: aBlock
	"Answer the full path from the context tree slice up to the specified root, including the path of the original slice. If the path only consists of a timeIndex, answer the result of evaluating aBlock."

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