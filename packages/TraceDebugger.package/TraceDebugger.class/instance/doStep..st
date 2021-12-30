private
doStep: aBlock

	| result |
	self okToChange ifFalse: [^ false].
	self selectedContext ifNil: [^ false].
	
	result := aBlock value.
	self changed: #cursorPosition.
	self selectContext: self interruptedContext.
	self selectedContext ifNil: [
		self flag: #(coroutines workaround). "After stepping over an unhandled error, #resumeEvaluating: cannot be displayed because its temporary is nil."
		self selectContext: self interruptedContext sender].
	^ result