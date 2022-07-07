tests - printing
testTdbShortSignature

	| context |
	context := #(nil) detect: #isNil ifFound: [:ea | thisContext sender] ifNone: [self fail].
	self assert: '[] in Array(Collection)>>detect:ifFound:ifNone:' equals: context tdbShortSignature.