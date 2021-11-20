*TraceDebuggerTests-UI-accessing
selectedContents

	| selection |
	selection := self contentsSelection.
	selection = (1 to: 0)
		ifTrue: [^ nil].
	selection first > selection last
		ifTrue: [selection := selection last to: selection first].
	^ self contents copyFrom: selection first + 1 to: selection last