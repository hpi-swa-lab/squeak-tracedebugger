private - stepping
stepBack
	"Do at least one step backward to the previous visible context. Answer the new current context or nil if the beginning of the trace has been reached."

	| context filter filtered method newMethod result |
	result := self basicStepBack ifNil: [^ nil].
	filter := self contextFilter ifNil: [^ result].
	
	method := nil.
	[(newMethod := (context := self context) method) == method
		ifFalse:
			[method := newMethod.
			filtered := filter value: context]
		ifTrue: [filtered]]
			whileFalse:
				[result := self basicStepBack ifNil: [^ nil]].
	^ result