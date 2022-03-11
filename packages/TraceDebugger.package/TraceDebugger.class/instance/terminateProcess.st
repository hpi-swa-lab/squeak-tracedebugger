private
terminateProcess

	| theProcess processHasOtherViews |
	theProcess := self releaseProcess.
	processHasOtherViews := (theProcess environmentAt: #tdbViews ifAbsent: [nil])
		isEmptyOrNil not.
	processHasOtherViews
		ifTrue:
			[Project current transcript showln:
				('Not terminating process {1}, which is still referenced by another view' format: {theProcess})]
		ifFalse:
			[theProcess terminateAggressively].