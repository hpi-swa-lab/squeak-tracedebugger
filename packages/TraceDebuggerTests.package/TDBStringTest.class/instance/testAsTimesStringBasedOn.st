tests - converting
testAsTimesStringBasedOn

	self assert: '1 plonk' equals: ('plonk' tdbAsTimesStringBasedOn: 1).
	self assert: '2 plonks' equals: ('plonk' tdbAsTimesStringBasedOn: 2).
	self assert: '-2.37 plonks' equals: ('plonk' tdbAsTimesStringBasedOn: -2.37).
	
	self assert: '0 plonks' equals: ('plonk' tdbAsTimesStringBasedOn: #()).
	self assert: '1 plonk' equals: ('plonk' tdbAsTimesStringBasedOn: #('griffle')).
	self assert: '2 plonks' equals: ('plonk' tdbAsTimesStringBasedOn: #('griffle' 'griffle')).