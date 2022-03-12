actions
jumpToSender

	| sender |
	self hasContextSelected ifFalse: [^ self jumpToPresence].
	
	sender := self cursor senderOf: self selectedContext.
	sender ifNil: [^ self changed: #flash].
	^ self selectContext: sender