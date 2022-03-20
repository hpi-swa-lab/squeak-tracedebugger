mocking
simpleContext

	| context |
	[[context := thisContext copy cut: thisContext home.
	thisContext home sender
		push: context;
		jump]
			value]
				value.