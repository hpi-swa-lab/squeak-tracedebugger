private
findNextAssertion: assertionBlock
	"Find the next assertion in the notebook. If the previous assertion has been reached, evaluate assertionBlock against it."

	| position matcher |
	position := debugger selectedContext isDead
		ifFalse:
			[debugger selectedContext willReturn ifTrue: [^ self].
			debugger normalizedContentsSelection last]
		ifTrue: [Float infinity].
	nextAssertionPosition ifNotNil:
		[position < nextAssertionPosition ifTrue:
			[^ self].
		
		assertionBlock value: nextAssertionString].
	
	debugger selectedContext isDead ifFalse:
		[matcher := '"([^"]*)"' asRegex.
		matcher
			matchesIn: (debugger contents allButFirst: position)
			do: [:match |
				nextAssertionPosition := position + (matcher subBeginning: 2) first.
				nextAssertionString := matcher subexpression: 2.
				^ self]].
	nextAssertionPosition := Float infinity.
	nextAssertionString := nil.