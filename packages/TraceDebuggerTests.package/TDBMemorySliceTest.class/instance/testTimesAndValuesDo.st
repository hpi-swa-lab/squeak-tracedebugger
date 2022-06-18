tests - enumerating
testTimesAndValuesDo

	| result |
	result := Array streamContents: [:stream |
		slice timesAndValuesDo: [:times :value | stream nextPut: {times. value}]].
	
	self assert: result = {{1 to: 3. 1}. {4 to: 4. object}. {5 to: 6. 3}}.
	self assert: (4 to: 4) equals: (result at: 2) second xxxtdbproxyTimeIndices.