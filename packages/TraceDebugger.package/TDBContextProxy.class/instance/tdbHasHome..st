testing
tdbHasHome: aContext

	| closure |
	(self tdbIdentical: aContext) ifTrue: [^ true].
	closure := self closure ifNil: [^ false].
	^ closure outerContext tdbHasHome: aContext