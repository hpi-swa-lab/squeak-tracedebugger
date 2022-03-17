*TraceDebuggerTests-Core-accessing
selectedContents

	| selection |
	selection := self normalizedContentsSelection.
	selection = (1 to: 0)
		ifTrue: [^ nil].
	^ self contents copyFrom: selection first to: selection last