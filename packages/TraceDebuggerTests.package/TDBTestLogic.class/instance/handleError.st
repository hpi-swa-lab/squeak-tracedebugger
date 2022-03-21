as yet unclassified
handleError

	^ [self signalError] on: Error do: [:ex | ex resumeUnchecked: {ex}]