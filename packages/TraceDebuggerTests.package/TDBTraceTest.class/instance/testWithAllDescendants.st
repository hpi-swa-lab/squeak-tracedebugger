tests
testWithAllDescendants

	self assert: trace1 withAllDescendants contents = {trace1. trace2. trace4. trace3}.
	self assert: trace2 withAllDescendants contents = {trace2. trace3}.
	self assert: trace3 withAllDescendants contents = {trace3}.
	self assert: trace4 withAllDescendants contents = {trace4}.