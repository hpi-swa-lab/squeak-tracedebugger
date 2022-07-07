controlling
context: aContext send: selector to: originalReceiver with: arguments lookupIn: originalLookupClass do: aBlock

	| receiver lookupClass |
	"Resolve proxy receiver for the same memory by replacing them with the original receiver. See TDBProxy>>#xxxtdbproxyForward: and senders."
	((aContext objectClass: (receiver := originalReceiver)) isTdbProxyClass
		and: [originalReceiver xxxtdbproxyMemory == memory])
			ifTrue:
				[receiver := originalReceiver xxxtdbproxyObject.
				lookupClass := aContext objectClass: receiver].
	
	^ super
		context: aContext
		send: selector
		to: receiver
		with: arguments
		lookupIn: (lookupClass ifNil: [originalLookupClass])
		do: aBlock