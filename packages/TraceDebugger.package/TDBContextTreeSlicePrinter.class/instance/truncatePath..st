building
truncatePath: path

	| left remaining right |
	self contextTreeSlice isRoot ifTrue:
		[^ path last: 1].
	
	remaining := path.
	left := right := #().
	self truncateLeft > 0 ifTrue:
		[left := remaining first: (self truncateLeft clampHigh: remaining size).
		remaining := remaining allButFirst: left size].
	self truncateRight > 0 ifTrue:
		[right := remaining last: (self truncateRight clampHigh: remaining size).
		remaining := remaining allButLast: right size].
	
	remaining = path ifTrue: [^ path].
	left size + right size = path size ifTrue: [^ path].
	^ (left copyWith: #'...') , right