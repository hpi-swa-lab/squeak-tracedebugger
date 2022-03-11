toolbuilder - opening
close
	"Close and delete this debugger. Try to trigger the close request through the UI first, do manually if not in the UI."

	self flag: #refactor. "mt: Maybe move this up to model?"
	self topView
		ifNotNil: [self changed: #close]
		ifNil:
			[self okToClose ifTrue:
				[self windowIsClosing; release]].