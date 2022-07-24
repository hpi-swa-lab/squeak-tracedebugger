tests - printing
testTdbSignature

	| context |
	context := #(nil) detect: #isNil ifFound: [:ea | thisContext sender] ifNone: [self fail].
	self assert: '[] in Array(Collection)>>detect:ifFound:ifNone: {enumerating}' equals: context tdbSignature.