examples
exampleCoroutines1
	"
	self exampleCoroutines1
	"

	self flag: #coroutines.
	self openForBlock: [
		[| sender |
		sender := thisContext swapSender: nil.
		thisContext swapSender: sender] value].