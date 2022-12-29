*TraceDebugger-UI-steppipng
doStepToNextChangeFor: anObject context: aContext expression: aStringOrNil requestor: requestorOrNil
	"Step forward through history until the result of evaluating the expression, aStringOrNil, against anObject for aContext changes in comparison with the original time. Answer a boolean indicating whether a step was executed.
	NOTE that this method does NOT advance the trace but only searches the existing history."

	| nextTimeIndex |
	nextTimeIndex := self
		nextTimeIndexFor: anObject
		context: aContext
		expression: aStringOrNil
		requestor: requestorOrNil
		ifCanceled: [^ false]
		ifNone:
			[self flag: #forLater. "Advance the program until expression changes - how can we do this efficiently? Is it okay to advance the program further than necessary?"
			
			"self maxTimeIndex" "jump to present"
			self flag: #discuss. "jumping to present would communicate the search bounds of this method, but is harder to reverse for users."
			^ false].
	
	self timeIndex: nextTimeIndex.
	"self changed: #cursorPosition."
	self flag: #refactor. "Move update inside stepping method together with all other stepping methods. See comment in TraceDebugger>>#update:."
	
	^ true