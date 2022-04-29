actions
findContext

	| signature |
	signature := Project uiManager
		tdbChooseFrom:
			(self cursor allContextHomeSignaturesBelow: self selectedContext) sorted
		title: 'Context signature?'
		initialSelection:
			(self nextFindSignature
				ifNil: [self selectedContext
					ifNotNil: [:context | self cursor contextSignatureFor: context]]).
	signature ifNil: [^ self].
	
	self nextFindSignature: signature.
	^ self
		findContext: signature
		again: false