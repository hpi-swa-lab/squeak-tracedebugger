advancing
advance

	| timeIndex result |
	result := context step.
	result ifNil: [^ nil].
	timeIndex := timeInterval stop + 1.
	
	result sender == context
		ifTrue: [^ self atTime: timeIndex putChild:
			(self class forContext: result parent: self timeIndex: timeIndex)].
	
	^ self advancedTo: result atTime: timeIndex