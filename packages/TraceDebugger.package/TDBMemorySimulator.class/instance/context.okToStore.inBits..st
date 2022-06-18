private - object access
context: aContext okToStore: value inBits: bitsClass
	"Answer whether the value can be stored in an instance of the bitsClass.
	
	(self systemNavigation allBehaviors select: #isBits) contents.
	"

	bitsClass isVariable ifFalse: [^ false].
	(aContext objectClass: value) == SmallInteger ifFalse: [^ false].
	value >= 0 ifFalse: [^ false].
	value < (2 ** (8 * bitsClass elementSize)) ifFalse: [^ false].
	^ true