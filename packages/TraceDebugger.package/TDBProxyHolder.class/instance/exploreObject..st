private
exploreObject: anObject

	(thisContext objectClass: anObject) isTdbProxyClass ifFalse: [^ anObject explore].
	
	^ self spawnModel: self tdbExplorerClass on: anObject