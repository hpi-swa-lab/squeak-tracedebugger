tests - accessing
testAllContextsBelow

	| cursor context1 context2 context3 context4 trace1 trace2 trace3 trace4 |
	context1 := [] asContext.
	context2 := [] asContext.
	context3 := [] asContext.
	context4 := [] asContext.
	trace1 := self traceClass forContext: context1.
	trace2 := self traceClass forContext: context2 parent: trace1 timeIndex: 10.
	trace3 := self traceClass forContext: context3 parent: trace1 timeIndex: 30.
	trace4 := self traceClass forContext: context4 parent: trace3 timeIndex: 20.
	trace1
		atTime: 10 putChild: trace2;
		atTime: 30 putChild: trace3.
	trace3
		atTime: 20 putChild: trace4.
	cursor := self classUnderTest on: trace1.
	
	self assert: (cursor allContextsBelow: context1) asArray = {context1. context2. context3. context4}.
	self assert: (cursor allContextsBelow: context2) asArray = {context2}.
	self assert: (cursor allContextsBelow: context3) asArray = {context3. context4}.
	self assert: (cursor allContextsBelow: context4) asArray = {context4}.