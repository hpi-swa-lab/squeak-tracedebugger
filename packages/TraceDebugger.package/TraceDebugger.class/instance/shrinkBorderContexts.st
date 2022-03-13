private
shrinkBorderContexts
	"Remove all border contexts that are no longer visible in the stack. The opposite was reported to be confusing."

	self borderContexts:
		(self borderContexts select: [:borderContext |
			(self selectedContext tdbIdentical: borderContext) or: [
				self selectedContext hasSender: borderContext]]).