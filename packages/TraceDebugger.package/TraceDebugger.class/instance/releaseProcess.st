private - process
releaseProcess

	| theProcess |
	(process environmentAt: #tdbViews ifAbsent: [nil])
		ifNotNil: [:views | views remove: self].
	theProcess := process.
	process := nil.
	^ theProcess