*TraceDebugger-UI-steppipng
doStepToPromptedChangeFor: anObject context: aContext expression: aStringOrNil ifCanceled: cancelBlock

	^ self
		doStepToPromptedChangeFor: anObject
		context: aContext
		expression: aStringOrNil
		requestor: nil
		ifCanceled: cancelBlock