asserting - toolbuilder
validateBalloonIn: aMorph

	| help |
	aMorph wantsBalloon ifFalse: [^ self].
	
	help := aMorph balloonText asString.
	self assert: help notEmpty.
	self deny: (help includesSubstring: 'error').
	self deny: (help includesSubstring: 'timeout').