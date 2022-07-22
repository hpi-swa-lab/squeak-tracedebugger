tests - primitives
testPrimitiveStringAtPut

	| string |
	simulator timeIndices: (1 to: 2).
	
	string := 'aaa' copy.
	simulator evaluate:
		[self shouldRaiseError: [string at: self put: 1].
		self shouldRaiseError: [string at: 1 put: self].
		string at: 2 put: (#($x $X) at: thisContext tdbRetracingTimeIndex) asciiValue.
		string at: 3 put: (#($y $Y) at: thisContext tdbRetracingTimeIndex).
		self assert: (#('axy' 'aXY') at: thisContext tdbRetracingTimeIndex) allButFirst equals: string allButFirst].
	string at: 1 put: $a; flag: #workaround. "https://github.com/OpenSmalltalk/opensmalltalk-vm/issues/636. also applies to the #allButFirst above!"
	self assert: 'aaa' equals: string.