updating
update: aspect

	self contextFilter ifNotNil: [:filter |
		aspect == filter ifTrue:
			["The filter has changed. Step forward to a context that is not excluded by the filter."
			self doStepUntil: [:context | context isDead or: [self contextFilter value: context]].
			self changed: #cursorPosition]].
	
	^ super update: aspect