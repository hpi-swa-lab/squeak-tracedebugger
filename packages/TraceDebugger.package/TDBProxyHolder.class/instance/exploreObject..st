private
exploreObject: anObject

	(thisContext objectClass: anObject) isTdbProxy ifFalse: [^ anObject explore].
	
	^ self spawnModel: self tdbExplorerClass on: anObject