private - object access
context: aContext okToStore: value inBits: bitsClass
	"Answer whether the value can be stored in an instance of the bitsClass.
	
	(self systemNavigation allBehaviors select: #isBits) contents.
	"

	| valueClass |
	bitsClass isVariable ifFalse: [^ false].
	(valueClass := aContext objectClass: value) == SmallInteger ifFalse:
		[^ true "lastPrimitive = 64" "primitiveStringAtPut"
			and: [valueClass includesBehavior: Character]
			and: [bitsClass == ByteString ==> [value isOctetCharacter]]].
	value >= 0 ifFalse: [^ false].
	value < (2 ** (8 * bitsClass elementSize)) ifFalse: [^ false].
	^ true