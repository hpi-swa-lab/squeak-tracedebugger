primitives
context: aContext primitiveBitBltCopyForm: aForm into: aBitBlt setter: setter
	"Copy aForm into aBitBlt by using the specified setter symbol using the read/write hooks. Answer the copied form's bitmap."

	| bits bitsCopy formCopy result |
	(self context: aContext simulatedObject: aForm instVarAt: 1 "bits" ifHit: [:value |
		bits := value. true])
			ifNil: [bits := aContext object: aForm instVarAt: 1].
	((aContext objectClass: bits) includesBehavior: Bitmap) ifFalse:
		[^ self context: aContext primitiveFailTokenFor: nil].
	
	
	"Clone aForm"
	result := self context: aContext primitiveClone: aForm do:
		[aContext push: (aContext simObjectShallowCopy: aForm)].
	(aContext isPrimFailToken: result)
		ifTrue: [^ self context: aContext primitiveFailTokenFor: result].
	formCopy := result pop.
	
	"Clone aForm's bits"
	bitsCopy := aContext simObjectShallowCopy: bits.
	"Do not copy variables/fields of the bitmap. Note: Earlier changes to the bitmap are ignored here! This is for performance considerations. The BitBlt simulation will never use the virtual memory."
	self addOwnObject: bitsCopy.
	
	
	"Updated bits reference in copied form"
	formCopy bits: bitsCopy.
	"Update reference in aBitBlt to aForm"
	aBitBlt perform: setter with: formCopy.
	
	^ bitsCopy