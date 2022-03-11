examples
exampleCoroutines2
	"
	self exampleCoroutines2
	"

	self flag: #coroutines. "Not yet supported! Technically, this example works, but the trace is displayed incompletely."
	self openForBlock: [self systemNavigation allBehaviors take: 2].