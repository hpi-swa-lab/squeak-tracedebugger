private
assureView: view

	(view respondsTo: #model) ifTrue: [^ view].
	
	self flag: #hacked. "Retry with the topmost window, presuming that the sender has opened it right before."
	self flag: #Morphic.
	^ (self currentHand findA: SystemWindow) ifNil:
		[self currentWorld findA: SystemWindow]