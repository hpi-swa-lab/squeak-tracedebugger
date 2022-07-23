accessing
atPath: targetPath
	"Look up the targetPath in the receiver and its descendants. If there is no exact match, answer nil."

	| leaf remainingPath |
	(targetPath beginsWith: self path) ifFalse: [^ nil].
	
	remainingPath := targetPath allButFirst: self path size.
	remainingPath ifEmpty: [^ self].
	
	^ self children
		detect: [:child | (leaf := child atPath: remainingPath) notNil]
		ifFound: [:any | leaf]
		ifNone: [nil]