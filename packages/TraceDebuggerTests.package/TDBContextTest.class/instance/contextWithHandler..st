mocking
contextWithHandler: handlerAction

	| context |
	[[context := thisContext copy cut: thisContext home.
	"Avoid regular return here to keep senders of the context intact. In production code, this would be a strong antipattern..."
	thisContext home sender
		push: context;
		jump]
			on: Notification do: handlerAction]
				value.