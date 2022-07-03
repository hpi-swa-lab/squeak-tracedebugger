accessing
selectedClassOrMetaClass

	| types |
	(thisContext objectClass: self object) isTdbMemorySliceClass ifFalse:
		[^ self object perform: #class].
	(Smalltalk hasClassNamed: #ECContext) ifFalse:
		[^ nil].
	
	types := (self object collect: #class) values.
	^ (Smalltalk classNamed: #ECContext) new findCommonSuperclass: types asArray