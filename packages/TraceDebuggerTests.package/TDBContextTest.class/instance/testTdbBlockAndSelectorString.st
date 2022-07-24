tests - printing
testTdbBlockAndSelectorString

	| context |
	context := [:exit | thisContext] valueWithExit.
	self assert: '[] in testTdbBlockAndSelectorString' equals: context tdbBlockAndSelectorString.