tests
testWithAllDescendants

	| context1 context2 context3 context4 trace1 trace2 trace3 trace4 |
	context1 := [] asContext.
	context2 := [] asContext.
	context3 := [] asContext.
	context4 := [] asContext.
	trace1 := self classUnderTest forContext: context1.
	trace2 := self classUnderTest forContext: context2.
	trace3 := self classUnderTest forContext: context3.
	trace4 := self classUnderTest forContext: context4.
	trace1 children
		at: 10 put: trace2;
		at: 30 put: trace3.
	trace2 children
		at: 20 put: trace4.
	
	self assert: trace1 withAllDescendants contents = {trace1. trace2. trace4. trace3}.
	self assert: trace2 withAllDescendants contents = {trace2. trace4}.
	self assert: trace3 withAllDescendants contents = {trace3}.
	self assert: trace4 withAllDescendants contents = {trace4}.