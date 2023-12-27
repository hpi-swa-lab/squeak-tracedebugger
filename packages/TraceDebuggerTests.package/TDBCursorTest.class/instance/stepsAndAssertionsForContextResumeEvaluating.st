tests - stepping
stepsAndAssertionsForContextResumeEvaluating

	self flag: #forLater. "these context details are not really desired parts of the trace but allow for the most logical implementation in the cursor for now"
	
	^
		{{#doStepOver. Context >> #terminate. #(willReturn)}.
		{[:cursor | cursor doStepOver: cursor context sender sender sender "Context >> #resumeEvaluating:through:"]. Exception >> #signal:. #(willReturn)}}