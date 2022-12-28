*TraceDebugger-UI-steppipng
doStepToPromptedChangeFor: anObject context: aContext expression: aStringOrNil requestor: requestorOrNil ifCanceled: cancelBlock
	"Ask the user for any historic result of evaluating the expression, aStringOrNil, against anObject for aContext changes. Move the receiver to the selected point in time. Answer a boolean indicating whether a step was executed.
	NOTE that this method does NOT advance the trace but only searches the existing history."

	| nextTimeIndex |
	nextTimeIndex := self
		promptedTimeIndexFor: anObject
		context: aContext
		expression: aStringOrNil
		requestor: requestorOrNil
		ifCanceled: [^ cancelBlock value].
	
	self timeIndex: nextTimeIndex.
	"self changed: #cursorPosition."
	self flag: #refactor. "Move update inside stepping method together with all other stepping methods. See comment in TraceDebugger>>#update:."
	
	^ true