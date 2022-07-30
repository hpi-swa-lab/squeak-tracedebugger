private
context: aContext findNextAssertion: assertionBlock
	"Find the next assertion in the notebook. If the previous assertion has been reached, evaluate assertionBlock against it."

	| position matcher |
	aContext isDead ifTrue: [^ self].
	position := (aContext isDead or: [aContext willReturn])
		ifFalse: [debugger normalizedContentsSelection last]
		ifTrue: [Float infinity].
	nextAssertionPosition ifNotNil:
		[position < nextAssertionPosition ifTrue:
			[^ self].
		
		assertionBlock value: nextAssertionString].
	
	position isInfinite ifFalse:
		[matcher := '"([^"]*)"' asRegex.
		matcher
			matchesIn: (debugger contents allButFirst: position)
			do: [:match |
				nextAssertionPosition := position + (matcher subBeginning: 2) first.
				nextAssertionString := matcher subexpression: 2.
				^ self]].
	nextAssertionPosition := Float infinity.
	nextAssertionString := nil.