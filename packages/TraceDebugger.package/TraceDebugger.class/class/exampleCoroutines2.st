examples
exampleCoroutines2
	"
	self exampleCoroutines2
	"

	self flag: #coroutines. "Not yet supported!"
	self openForBlock: [self systemNavigation allBehaviors take: 2].