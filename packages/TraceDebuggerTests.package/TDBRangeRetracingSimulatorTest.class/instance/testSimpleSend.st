tests
testSimpleSend

	self
		assertQuery: [object plonk]
		times: {0 to: 4}
		values: {object plonk}.
	
	self
		assertQuery: [object griffle]
		times: {0 to: 3. 4 to: 4}
		values: {3. object griffle}.
	
	self
		assertQuery: [object plonkPlusGriffle]
		times: {0 to: 3. 4 to: 4}
		values: {4. object plonk + 2}.