private
exploreObject: anObject

	(self isTdbProxy: anObject) ifFalse:
		[^ self assureView: anObject explore].
	
	^ self spawnModel: self tdbExplorerClass on: anObject