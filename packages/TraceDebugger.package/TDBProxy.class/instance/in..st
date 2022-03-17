dynamic forwarding
in: aBlock
	"Documentation only - sending multiple messages to a proxy in one go can be easily achieved by using #in:. Example:
		myTdbProxy in: [:theProxy |
			self doSomethingWith: theProxy.
			self doSomethingElseWith: theProxy].
	See #62 for more details."

	^ self xxxtdbproxyForward:
		[self in: aBlock]