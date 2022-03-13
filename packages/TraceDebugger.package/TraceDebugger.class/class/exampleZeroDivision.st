examples
exampleZeroDivision
	"
	Stepping over errors in the simulated code also works, and it works even more conveniently than in the default debugger.
	
	self exampleZeroDivision
	"

	self openForBlock: [2 / 0].