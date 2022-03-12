private
inspectObject: anObject

	(thisContext objectClass: anObject) isTdbProxyClass ifFalse: [^ anObject inspect].
	
	^ self spawnModel: self tdbInspectorClass on: anObject