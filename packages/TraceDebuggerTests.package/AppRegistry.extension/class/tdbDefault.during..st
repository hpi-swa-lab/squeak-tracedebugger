*TraceDebuggerTests-UI-accessing
tdbDefault: aClass during: aBlock

	| oldDefault |
	self flag: #moveUpstream.
	
	oldDefault := default.
	self default: aClass.
	^ aBlock ensure:
		[self default: oldDefault]