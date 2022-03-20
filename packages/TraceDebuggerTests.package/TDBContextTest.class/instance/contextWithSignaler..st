mocking
contextWithSignaler: anException

	| context |
	[anException signal]
		on: anException class do: [:ex |
			context := thisContext copy cut: thisContext nextHandlerContext.
			"Avoid regular return here to keep senders of the context intact. In production code, this would be a strong antipattern..."
			thisContext home sender
				push: context;
				jump].