private
inspectObject: anObject

	(thisContext objectClass: anObject) isTdbProxyClass ifFalse:
		[^ self assureView: anObject inspect].
	
	^ self spawnModel: self tdbInspectorClass on: anObject