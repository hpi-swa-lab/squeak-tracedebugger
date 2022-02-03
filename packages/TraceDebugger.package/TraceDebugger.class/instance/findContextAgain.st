actions
findContextAgain

	| signature |
	signature := self nextFindSignature ifNil: [^ self changed: #flash].
	
	^ self
		findContext: signature
		again: true