instruction processing
context: aContext pushReceiverVariable: offset do: aBlock

	| receiver |
	receiver := aContext receiver.
	(self context: aContext isVector: receiver)
		ifTrue:
			[receiver := receiver atTimes: timeIndices.
			receiver hasSingleValue ifFalse:
				[^ self fork: aContext for: receiver collect: [:eachContext :eachReceiver |
					eachContext pushReceiverVariable: offset "constant recursion guard clause"]].
			receiver := receiver rawValues first].
	self
		context: aContext
		simulatedObject: receiver
		instVarAt: offset + 1
		ifHit: [:value | ^ aContext push: value].
	
	^ aContext push: (aContext object: receiver instVarAt: offset + 1)