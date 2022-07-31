actions
jumpToSender

	| sender |
	self hasContextSelected ifFalse: [^ self jumpToPresent].
	
	sender := self cursor senderOf: self selectedContext.
	sender ifNil: [^ self changed: #flash].
	^ self selectContext: sender