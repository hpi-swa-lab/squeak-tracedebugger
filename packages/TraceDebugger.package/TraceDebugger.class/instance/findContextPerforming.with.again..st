private
findContextPerforming: findSelector with: parameter again: again

	| context |
	context := self cursor
		perform: findSelector
		with: parameter
		with: (self selectedContext
			ifNotNil: [:ctxt | (self cursor minTimeIndexFor: ctxt) + again asBit]
			ifNil: [0]).
	context ifNil: [^ self changed: #flash].
	
	self selectContext: context.