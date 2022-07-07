actions
debugSnapshot

	| snapshot |
	snapshot := self cursor
		object: self object
		atTime: self selectedContextSlice maxTimeIndex.
	
	^ (self auxiliaryInspectorOn: snapshot) debugExpression: self expression requestor: nil