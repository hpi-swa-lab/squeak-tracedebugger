private - object access
context: aContext okToStore: value inBits: objectClass
	"Overrideen to handle possible vector semantics of value."

	(self context: aContext isVector: value) ifFalse:
		[^ super context: aContext okToStore: value inBits: objectClass].
	
	value rawDo: [:eachValue |
		(self context: aContext okToStore: eachValue inBits: objectClass)
			ifFalse: [^ false]].
	^ true