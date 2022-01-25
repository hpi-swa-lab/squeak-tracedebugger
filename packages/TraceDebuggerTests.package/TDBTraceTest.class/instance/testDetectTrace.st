tests
testDetectTrace

	self
		assert: trace1 equals: (trace1 detectTraceFor: context1);
		assert: trace2 equals: (trace1 detectTraceFor: context2);
		assert: trace3 equals: (trace1 detectTraceFor: context3);
		assert: trace4 equals: (trace1 detectTraceFor: context4).
	self
		should: [trace2 detectTraceFor: context1] raise: Error;
		assert: trace2 equals: (trace2 detectTraceFor: context2);
		assert: trace3 equals: (trace2 detectTraceFor: context3);
		should: [trace2 detectTraceFor: context4] raise: Error.
	self
		should: [trace3 detectTraceFor: context1] raise: Error;
		should: [trace3 detectTraceFor: context2] raise: Error;
		assert: trace3 equals: (trace3 detectTraceFor: context3);
		should: [trace3 detectTraceFor: context4] raise: Error.
	self
		should: [trace4 detectTraceFor: context1] raise: Error;
		should: [trace4 detectTraceFor: context2] raise: Error;
		should: [trace4 detectTraceFor: context3] raise: Error;
		assert: trace4 equals: (trace4 detectTraceFor: context4).