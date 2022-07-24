tests - enumerating
testRawDo

	| values |
	values := Array streamContents: [:stream |
		slice rawDo: [:ea | stream nextPut: ea]].
	
	self assert: slice rawValues equals: values.