private
decorateView: view forObject: anObject

	(thisContext objectClass: anObject) isTdbProxy ifFalse: [^ view].
	
	view setLabel: ('{1} [snapshot @ {2}]' format: {view label. anObject xxxtdbproxyTimeIndex}).
	view setWindowColor: self debugger colorForHistory.
	
	^ view