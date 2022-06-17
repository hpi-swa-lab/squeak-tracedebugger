private - vectors
context: aContext combineArguments: arguments collect: aBlock
	"Evaluate aBlock with the arguments array and answer the result. If at least one argument is a vector, aBlock will be evaluated for each combination of time intervals, and the result will be a new vector if necessary."

	| result |
	result := arguments size
		caseOf:
			{[0] -> [^ aBlock value: arguments].
			"Hardcoded arguments sizes. Optimization."
			[1] -> 
				[(self context: aContext isVector: arguments first)
					ifFalse: [^ aBlock value: arguments]
					ifTrue:
						[(arguments first atTimes: timeIndices)
							rawCollect: [:value | aBlock value: {value}]]].
			[2] ->
				[(self context: aContext isVector: arguments first)
					ifFalse:
						[(self context: aContext isVector: arguments second)
							ifFalse: [^ aBlock value: arguments]
							ifTrue:
								[(arguments second atTimes: timeIndices)
									rawCollect: [:value | aBlock value: {arguments first. value}]]]
					ifTrue:
						[(self context: aContext isVector: arguments second)
							ifFalse:
								[(arguments first atTimes: timeIndices)
									rawCollect: [:value | aBlock value: {value. arguments second}]]
							ifTrue:
								[(arguments first atTimes: timeIndices)
									with: (arguments second atTimes: timeIndices)
									rawCollect: [:first :second | aBlock value: {first. second}]]]]}
		otherwise:
			[self assert: arguments size > 2.
			"Generic case. Combine all arguments recursively."
			(self context: aContext isVector: arguments first)
				ifFalse:
					[^ self context: aContext combineArguments: arguments allButFirst collect:
						[:allButFirst | aBlock value: (allButFirst copyWithFirst: arguments first)]]
				ifTrue:
					[result := self context: aContext combineArguments: arguments allButFirst collect: [:allButFirst | allButFirst].
					(self context: aContext isVector: result)
						ifTrue:
							[result rawWithTimesGather: [:allButFirst :times |
								(arguments first atTimes: times)
									rawCollect: [:value | aBlock value: (allButFirst copyWithFirst: value)]]]
						ifFalse:
							[(arguments first atTimes: timeIndices)
								rawCollect: [:value | aBlock value: (result copyWithFirst: value)]]]].
	
	^ result hasSingleValue
		ifTrue: [result rawValues first]
		ifFalse: [allVectors add: result]