accessing - context
selectedReceiver

	^ self selectedContext ifNotNil: [:context | context receiver]