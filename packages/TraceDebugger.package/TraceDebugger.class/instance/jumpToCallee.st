actions
jumpToCallee

	| callee |
	callee := self cursor calleeOf: self selectedContext.
	callee ifNil: [callee := (self cursor childContextsFor: self selectedContext)
		ifNotEmpty: [:contexts | contexts first]
		ifEmpty: []].
	callee ifNil: [^ self changed: #flash].
	^ self selectContext: callee