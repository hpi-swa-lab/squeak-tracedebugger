actions
jumpToSender

	| sender |
	sender := self cursor senderOf: self selectedContext.
	sender ifNil: [^ self changed: #flash].
	^ self selectContext: sender