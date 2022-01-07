running
setUp

	super setUp.
	
	context1 := [] asContext.
	context2 := [] asContext.
	context3 := [] asContext.
	context4 := [] asContext.
	
	trace1 := self classUnderTest forContext: context1.
	trace1 atTime: 10 putChild:
		(trace2 := self classUnderTest forContext: context2 parent: trace1 timeIndex: 10).
	trace2 atTime: 20 putChild:
		(trace3 := self classUnderTest forContext: context3 parent: trace2 timeIndex: 20).
	trace3 advancedTo: context3 atTime: 25.
	trace2 advancedTo: context2 atTime: 25.
	trace1 atTime: 30 putChild:
		(trace4 := self classUnderTest forContext: context4 parent: trace1 timeIndex: 30).
	trace4 advancedTo: context4 atTime: 40.
	trace1 advancedTo: context1 atTime: 45.