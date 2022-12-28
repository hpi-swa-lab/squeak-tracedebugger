private
tdbInspectorFor: anInspector

	^ self tdbInspectorClass
		forModel: anInspector
		cursor: self cursor