updating
update: aspect

	self contextFilter ifNotNil: [:filter |
		aspect == filter ifTrue:
			[self doStepUntil: [:context | context isDead or: [self contextFilter value: context]].
			self changed: #cursorPosition]].
	
	^ super update: aspect