private
computeSliceFrom: aStringOrText for: requestor

	| block |
	block := self
		compileToBlock: aStringOrText
		requestor: requestor
		ifFail: [^ false].
	
	memorySlice := Cursor wait showWhile:
		[self cursor object: self object collect: [:ea |
			TDBMaybeResult catch: self commonErrors during: [block value: ea]]].
	self changed: #memorySlice.
	
	^ true