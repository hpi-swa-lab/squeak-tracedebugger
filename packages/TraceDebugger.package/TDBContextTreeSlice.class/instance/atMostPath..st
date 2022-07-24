accessing
atMostPath: targetPath
	"Look up the targetPath in the receiver and its descendants as much as possible. If there is no exact match, answer the best match from the targeted's slice parents."

	| leaf remainingPath |
	(targetPath beginsWith: self path) ifFalse: [^ nil].
	
	remainingPath := targetPath allButFirst: self path size.
	remainingPath ifEmpty: [^ self].
	
	^ (self children
		detect: [:child | (leaf := child atMostPath: remainingPath) notNil]
		ifFound: [:any | leaf]
		ifNone: [nil])
			ifNil: [self]