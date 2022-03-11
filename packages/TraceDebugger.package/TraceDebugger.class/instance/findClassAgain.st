actions
findClassAgain

	| signature |
	signature := self nextFindClass ifNil: [^ self changed: #flash].
	
	^ self
		findClass: signature
		again: true