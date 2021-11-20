accessing
pcRange

	| context |
	(context := self selectedContext)
		ifNil: [^ 1 to: 0].
	^ context debuggerMap
		rangeForPC: context pc
		in: context method
		contextIsActiveContext: (true flag: #todo "???")