tests
testConsArray

	simulator shouldIsolate: true.
	
	self assert: #(2 3) equals:
		(simulator evaluate:
			[{1. 3}
				at: 1 put: 2;
				yourself]).