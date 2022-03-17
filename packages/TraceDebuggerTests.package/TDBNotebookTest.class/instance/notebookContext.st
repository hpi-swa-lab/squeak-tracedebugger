running
notebookContext

	| receiver selector |
	receiver := Smalltalk classNamed: testSelector key.
	selector := testSelector value.
	^ thisContext
		activateMethod: (receiver class lookupSelector: selector)
		withArgs: #()
		receiver: receiver