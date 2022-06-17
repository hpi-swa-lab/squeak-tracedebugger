tests - enumerating
testTimesAndRawValuesCollect

	| result |
	result := slice timesAndRawValuesCollect: [:times :rawValue | {times. rawValue}].
	
	self assert: {{1 to: 3. 1}. {4 to: 4. object}. {5 to: 6. 3}} equals: result.
	self deny: (thisContext objectClass: (result at: 2)) isTdbMemorySliceClass.