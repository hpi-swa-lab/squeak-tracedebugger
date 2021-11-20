tests
testDetectTrace

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
	
	self
		assert: (trace1 detectTraceFor: context1 atTime: 30) = trace1;
		assert: (trace1 detectTraceFor: context2 atTime: 30) = trace2;
		assert: (trace1 detectTraceFor: context3 atTime: 30) = trace3;
		assert: (trace1 detectTraceFor: context4 atTime: 30) = trace4.
	self
		should: [trace2 detectTraceFor: context1 atTime: 30] raise: Error;
		assert: (trace2 detectTraceFor: context2 atTime: 30) = trace2;
		should: [trace2 detectTraceFor: context3 atTime: 30] raise: Error;
		assert: (trace2 detectTraceFor: context4 atTime: 30) = trace4..
	self
		should: [trace3 detectTraceFor: context1 atTime: 30] raise: Error;
		should: [trace3 detectTraceFor: context2 atTime: 30] raise: Error;
		assert: (trace3 detectTraceFor: context3 atTime: 30) = trace3;
		should: [trace3 detectTraceFor: context4 atTime: 30] raise: Error.
	self
		should: [trace4 detectTraceFor: context1 atTime: 30] raise: Error;
		should: [trace4 detectTraceFor: context2 atTime: 30] raise: Error;
		should: [trace4 detectTraceFor: context3 atTime: 30] raise: Error;
		assert: (trace4 detectTraceFor: context4 atTime: 30) = trace4.