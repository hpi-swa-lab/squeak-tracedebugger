actions
findContext

	| signature |
	signature := Project uiManager
		tdbChooseFromValues: self cursor allContextHomeSignatures sorted
		title: 'Context signature?'.
	signature ifNil: [^ self].
	
	self nextFindSignature: signature.
	^ self
		findContext: signature
		again: false