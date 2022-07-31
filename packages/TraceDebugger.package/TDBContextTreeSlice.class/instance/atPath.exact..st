accessing
atPath: targetPath exact: exact
	"Look up the targetPath in the receiver and its descendants. If there is no exact match for the entire path, answer nil if exact is true, or the best match (i.e., for the largest prefix of the path) from the targeted's slice parents otherwise."

	| leaf remainingPath result |
	(targetPath beginsWith: self path) ifFalse: [^ nil].
	
	remainingPath := targetPath allButFirst: self path size.
	remainingPath ifEmpty: [^ self].
	
	result := self children
		detect: [:child | (leaf := child atPath: remainingPath exact: exact) notNil]
		ifFound: [:any | leaf]
		ifNone: [nil].
	^ exact
		ifTrue: [result]
		ifFalse: [result ifNil: [self]]