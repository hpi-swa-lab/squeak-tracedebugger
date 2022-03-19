accessing - toolbuilder
treeSelectContext: aContext

	| context |
	context := self cursor object: aContext.
	
	(self currentEvent isMouse and: [self currentEvent shiftPressed] and: [context notNil])
		ifFalse: [self basicSelectContext: context]
		ifTrue:
			["Select the sender at the time of the invocation of aContext instead."
			self cursor timeIndex:
				(self cursor minTimeIndexFor: context).
			self currentEvent tdbWithoutShiftPressed becomeActiveDuring:
				"Avoid multiple recursion when #basicSelectContext: calls back to this method"
				[selectedContext := context. "Assure that #basicSelectContext: will reselect the target context and update the time"
				self basicSelectContext:
					(self cursor senderOf: context)]].
	
	self changed: #treeSelectedContext.