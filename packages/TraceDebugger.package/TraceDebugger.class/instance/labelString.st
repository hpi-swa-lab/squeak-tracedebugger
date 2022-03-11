toolbuilder - opening
labelString

	| label |
	label := self class appName.
	self hasContextSelected ifTrue:
		[label := '{1} @ {2}' format: {label. self cursor timeIndex}].
	self isDisplayingHistory ifTrue:
		[label := '{1} [historic]' format: {label}].
	^ label