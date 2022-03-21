enumerating contexts
allContextClassesBelow: aContext

	| signatures |
	signatures := Set new.
	self allContextsBelow: aContext do: [:context |
		signatures add: context methodClass].
	^ signatures