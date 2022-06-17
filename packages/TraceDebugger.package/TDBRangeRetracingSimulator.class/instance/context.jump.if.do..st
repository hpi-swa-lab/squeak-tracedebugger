instruction processing
context: aContext jump: distance if: condition do: aBlock

	| bool |
	bool := aContext top.
	(self context: aContext isVector: bool) ifFalse:
		[^ super context: aContext jump: distance if: condition do: aBlock].
	
	^ self fork: aContext for: bool collect: [:eachContext :eachBool |
		eachContext pop.
		condition == eachBool
			ifTrue: [eachContext jump: distance]
			ifFalse:
				[(true == eachBool or: [false == eachBool])
					ifTrue: [eachContext]
					ifFalse: [eachContext send: #mustBeBoolean to: eachBool with: #()]]]