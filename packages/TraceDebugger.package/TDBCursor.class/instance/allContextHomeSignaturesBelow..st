enumerating contexts
allContextHomeSignaturesBelow: aContext

	| signatures |
	signatures := Set new.
	self allContextsBelow: aContext do: [:context |
		signatures add: context home tdbSignature].
	^ signatures