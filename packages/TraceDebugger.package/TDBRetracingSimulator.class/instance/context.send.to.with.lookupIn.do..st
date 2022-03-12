controlling
context: aContext send: selector to: originalReceiver with: arguments lookupIn: originalLookupClass do: aBlock

	| receiver lookupClass |
	((aContext objectClass: (receiver := originalReceiver)) isTdbProxyClass
		and: [originalReceiver xxxtdbproxyMemory == memory])
			ifTrue:
				[receiver := originalReceiver xxxtdbproxyObject.
				lookupClass := aContext objectClass: receiver].
	
	^ super context: aContext send: selector to: receiver with: arguments lookupIn: (lookupClass ifNil: [originalLookupClass]) do: aBlock