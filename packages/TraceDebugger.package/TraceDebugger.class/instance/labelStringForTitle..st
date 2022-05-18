toolbuilder - opening
labelStringForTitle: title

	| label |
	label := self appName.
	
	self hasContextSelected ifTrue:
		[label := '{1} @ {2}' format: {label. self cursor timeIndex}].
	self isDisplayingHistory ifTrue:
		[label := '{1} [historic]' format: {label}].
	
	title ifNotNil:
		[label := '{1}: {2}' format: {label. title}].
	
	^ label