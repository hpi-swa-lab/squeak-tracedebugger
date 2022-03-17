private - stepping
step
	"Do at least one step forward to the next visible context. Answer the new current context or nil if the execution has been completed."

	| context filter filtered method newMethod result |
	result := self basicStep ifNil: [^ nil].
	filter := self contextFilter ifNil: [^ result].
	
	method := nil.
	[(newMethod := (context := self context) method) == method
		ifFalse:
			[method := newMethod.
			filtered := filter value: context]
		ifTrue: [filtered]]
			whileFalse:
				[result := self basicStep ifNil: [^ nil]].
	^ result