private - process
setProcess: aProcess

	process := aProcess.
	(process environmentAt: #tdbViews ifAbsentPut: [WeakOrderedCollection new])
		add: self.