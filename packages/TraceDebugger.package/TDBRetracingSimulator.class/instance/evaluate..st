accessing
evaluate: aBlock

	| result exception |
	result := [super evaluate: aBlock]
		on: Error, Warning, Halt
		do: [:ex | exception := ex].
	
	exception ifNotNil: [:ex | ^ Error new tag: ex; signal: 'simulator error'; flag: #workaround].
	
	^ result