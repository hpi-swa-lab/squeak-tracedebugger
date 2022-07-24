instruction processing
context: aContext send: selector to: receiver with: arguments do: aBlock

	| lookupClass |
	lookupClass := self context: aContext combineArguments: {receiver} collect: [:eachReceiver |
		aContext objectClass: eachReceiver first].
	(self context: aContext isVector: lookupClass) ifTrue:
		[^ self fork: aContext for: lookupClass withTimesCollect: [:eachContext :eachClass :times |
			eachContext send: selector to: (receiver atTimes: times) with: arguments lookupIn: eachClass]].
	
	self flag: #todo. "QuickStep?".
	^ aContext send: selector to: receiver with: arguments lookupIn: lookupClass