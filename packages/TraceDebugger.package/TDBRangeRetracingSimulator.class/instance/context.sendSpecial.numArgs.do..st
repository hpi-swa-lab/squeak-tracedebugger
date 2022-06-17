instruction processing
context: aContext sendSpecial: selector numArgs: numArgs do: aBlock

	^ self context: aContext send: selector super: false numArgs: numArgs do: aBlock