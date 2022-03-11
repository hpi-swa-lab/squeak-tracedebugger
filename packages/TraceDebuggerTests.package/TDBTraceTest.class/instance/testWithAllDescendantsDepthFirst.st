tests
testWithAllDescendantsDepthFirst

	self assert: trace1 withAllDescendantsDepthFirst contents = {trace1. trace2. trace3. trace4}.
	self assert: trace2 withAllDescendantsDepthFirst contents = {trace2. trace3}.
	self assert: trace3 withAllDescendantsDepthFirst contents = {trace3}.
	self assert: trace4 withAllDescendantsDepthFirst contents = {trace4}.