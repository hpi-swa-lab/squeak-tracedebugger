tests
testTraceForContext

	self
		assert: trace1 equals: (trace1 traceForContext: context1);
		assert: trace2 equals: (trace1 traceForContext: context2);
		assert: trace3 equals: (trace1 traceForContext: context3);
		assert: trace4 equals: (trace1 traceForContext: context4).