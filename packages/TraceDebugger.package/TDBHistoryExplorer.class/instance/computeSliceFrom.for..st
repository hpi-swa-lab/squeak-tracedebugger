private
computeSliceFrom: aStringOrText for: requestor

	| block |
	block := self
		compileToBlock: aStringOrText
		requestor: requestor
		ifFail: [^ false].
	
	memorySlice := self cursor object: self object collect: [:ea |
		TDBMaybeResult catch: Error, Warning, Halt during: [block value: ea]].
	self changed: #memorySlice.
	
	^ true