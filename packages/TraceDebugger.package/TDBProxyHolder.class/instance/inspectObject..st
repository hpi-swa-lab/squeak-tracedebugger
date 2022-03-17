private
inspectObject: anObject

	(self isTdbProxy: anObject) ifFalse:
		[^ self assureView: anObject inspect].
	
	^ self spawnModel: self tdbInspectorClass on: anObject