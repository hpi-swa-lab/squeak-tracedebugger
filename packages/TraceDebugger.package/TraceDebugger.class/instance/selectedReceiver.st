accessing
selectedReceiver

	^ self selectedContext ifNotNil: [:context | context receiver]