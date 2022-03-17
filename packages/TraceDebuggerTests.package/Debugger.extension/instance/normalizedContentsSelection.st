*TraceDebuggerTests-Core-accessing
normalizedContentsSelection

	| selection |
	selection := self contentsSelection.
	selection = (1 to: 0)
		ifTrue: [^ selection].
	selection first > selection last
		ifTrue: [^ selection last + 1 to: selection first - 1].
	^ selection