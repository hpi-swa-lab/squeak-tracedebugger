instruction processing
context: aContext send: selector super: superFlag numArgs: numArgs do: aBlock

	| thisReceiver arguments lookupClass |
	superFlag ifTrue: [^ super context: aContext send: selector super: superFlag numArgs: numArgs do: aBlock].
	
	arguments := Array new: numArgs.
	numArgs to: 1 by: -1 do: [:i | arguments at: i put: aContext pop].
	thisReceiver := aContext pop.
	
	lookupClass := self context: aContext combineArguments: {thisReceiver} collect: [:eachReceiver |
		aContext objectClass: eachReceiver first].
	(self context: aContext isVector: lookupClass) ifTrue:
		[^ self fork: aContext for: lookupClass withTimesCollect: [:eachContext :eachClass :times |
			eachContext send: selector to: (thisReceiver atTimes: times) with: arguments lookupIn: eachClass]].
	
	self flag: #todo. "QuickStep?".
	^ aContext send: selector to: thisReceiver with: arguments lookupIn: lookupClass