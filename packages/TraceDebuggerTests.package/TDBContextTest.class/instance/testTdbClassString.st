tests - printing
testTdbClassString

	| context |
	context := [:exit | thisContext sender] valueWithExit.
	self assert: 'FullBlockClosure(BlockClosure)' equals: context tdbClassString.