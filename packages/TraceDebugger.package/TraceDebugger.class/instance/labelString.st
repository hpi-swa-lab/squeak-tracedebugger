toolbuilder - opening
labelString

	| label title |
	label := self appName.
	
	self hasContextSelected ifTrue:
		[label := '{1} @ {2}' format: {label. self cursor timeIndex}].
	self isDisplayingHistory ifTrue:
		[label := '{1} [historic]' format: {label}].
	
	title := self interruptedSignalerContext
		ifNotNil: [:context |
			| exception |
			exception := context receiver.
			exception description]
		ifNil: [originalLabel].
	title ifNotNil:
		[label := '{1}: {2}' format: {label. title}].
	
	^ label