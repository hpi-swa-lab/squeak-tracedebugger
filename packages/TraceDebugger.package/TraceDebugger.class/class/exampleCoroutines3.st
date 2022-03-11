examples
exampleCoroutines3
	"
	self exampleCoroutines3
	"

	self flag: #coroutines. "Not yet supported! Technically, this example works, but the trace is displayed incompletely."
	self openForBlock:
		[(Generator on: [:gen | gen yield: 1; yield: 2]) next].