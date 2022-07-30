private
applyContextLabelTruncationTo: aTDBContextTreeSlicePrinter

	aTDBContextTreeSlicePrinter
		truncateLeft: self contextLabelTruncation first;
		truncateRight: self contextLabelTruncation second.