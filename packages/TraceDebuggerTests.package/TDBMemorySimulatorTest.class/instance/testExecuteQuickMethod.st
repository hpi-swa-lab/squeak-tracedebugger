tests
testExecuteQuickMethod

	simulator shouldIsolate: true.
	
	self assert: {3. 3} equals:
		(simulator evaluate:
			[object plonk: 3.
			{object executeMethod: object class >> #plonk.
			object withArgs: #() executeMethod: object class >> #plonk}]).