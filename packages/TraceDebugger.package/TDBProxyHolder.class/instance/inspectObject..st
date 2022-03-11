private
inspectObject: anObject

	(thisContext objectClass: anObject) isTdbProxy ifFalse: [^ anObject inspect].
	
	^ self spawnModel: self tdbInspectorClass on: anObject