*TraceDebugger-UI-steppipng
doStepToPreviousChangeFor: anObject context: aContext expression: aStringOrNil requestor: requestorOrNil
	"Step backward through history until the result of evaluating the expression, aStringOrNil, against anObject for aContext changes in comparison with the original time. Answer a boolean indicating whether a step was executed."

	| nextTimeIndex |
	nextTimeIndex := self
		previousTimeIndexFor: anObject
		context: aContext
		expression: aStringOrNil
		requestor: requestorOrNil
		ifCanceled: [^ false]
		ifNone: [^ false].
	
	self timeIndex: nextTimeIndex.
	"self changed: #cursorPosition."
	self flag: #refactor. "Move update inside stepping method together with all other stepping methods. See comment in TraceDebugger>>#update:."
	
	^ true