tests
testWithAllDescendantsBreadthFirst

	self assert: trace1 withAllDescendantsBreadthFirst contents = {trace1. trace2. trace4. trace3}.
	self assert: trace2 withAllDescendantsBreadthFirst contents = {trace2. trace3}.
	self assert: trace3 withAllDescendantsBreadthFirst contents = {trace3}.
	self assert: trace4 withAllDescendantsBreadthFirst contents = {trace4}.