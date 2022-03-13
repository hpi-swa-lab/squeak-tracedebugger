private
exploreObject: anObject

	(thisContext objectClass: anObject) isTdbProxyClass ifFalse:
		[^ self assureView: anObject explore].
	
	^ self spawnModel: self tdbExplorerClass on: anObject