as yet unclassified
loop

	| x |
	["x is still undefined at this point. ->"x isNil] whileTrue: [x := self].
	^ x