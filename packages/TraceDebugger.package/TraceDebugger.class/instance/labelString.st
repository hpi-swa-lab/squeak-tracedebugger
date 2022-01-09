toolbuilder - opening
labelString

	| label |
	label := self class appName.
	self isDisplayingHistory ifTrue:
		[label := '{1} [historic]' format: {label}].
	^ label