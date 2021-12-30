*TraceDebuggerTests-UI-accessing
selectedContents

	| selection |
	selection := self contentsSelection.
	selection = (1 to: 0)
		ifTrue: [^ nil].
	selection first > selection last
		ifTrue: [selection := selection last + 1 to: selection first - 1].
	^ self contents copyFrom: selection first to: selection last