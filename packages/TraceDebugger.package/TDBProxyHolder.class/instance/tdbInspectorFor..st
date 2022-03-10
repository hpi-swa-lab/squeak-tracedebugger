private
tdbInspectorFor: anInspector

	^ self tdbInspectorClass
		forModel: anInspector
		debugger: self debugger