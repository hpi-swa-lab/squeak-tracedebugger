private
shrinkBorderContexts
	"Remove all border contexts that are no longer visible in the stack. Otherwise, parent context may disappear during future stepping, which was reported to be confusing."

	self borderContexts:
		(self borderContexts select: [:borderContext |
			(self selectedContext tdbIdentical: borderContext) or: [
				self selectedContext hasSender: borderContext]]).