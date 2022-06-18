tests - enumerating
testTimesAndRawValuesDo

	| result |
	result := Array streamContents: [:stream |
		slice timesAndRawValuesDo: [:times :rawValue | stream nextPut: {times. rawValue}]].
	
	self assert: result = {{1 to: 3. 1}. {4 to: 4. object}. {5 to: 6. 3}}.
	self deny: (thisContext objectClass: (result at: 2) second) isTdbMemorySliceClass.