tests - enumerating
testTimesAndValuesCollect

	| result |
	result := slice timesAndValuesCollect: [:times :value | {times. value}].
	
	self assert: result = {{1 to: 3. 1}. {4 to: 4. object}. {5 to: 6. 3}}.
	self assert: (4 to: 4) equals: (result at: 2) second xxxtdbproxyTimeIndices.