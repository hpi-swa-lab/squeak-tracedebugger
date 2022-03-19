actions
findContext

	| signature |
	signature := Project uiManager
		tdbChooseFrom:
			(self cursor allContextHomeSignaturesBelow: self selectedContext) sorted
		title: 'Context signature?'
		initialSelection:
			(self nextFindSignature
				ifNil: [self cursor contextSignatureFor: self selectedContext]).
	signature ifNil: [^ self].
	
	self nextFindSignature: signature.
	^ self
		findContext: signature
		again: false