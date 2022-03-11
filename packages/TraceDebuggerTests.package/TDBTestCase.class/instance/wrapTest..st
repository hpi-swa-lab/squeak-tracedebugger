running
wrapTest: executeAroundBlock
	"Wrap the remaining test execution with the executeAroundBlock. The block is expected to receive one block as an argument and must evaluate it exactly one time. Inspired by Python's unittest addCleanup(). See also SimulationStudio's Context >> #wrap: extension.
	
	Usage:
		self wrapTest: [:block | Utilities useAuthorInitials: 'xyz' during: block].
		self wrapTest: [:block | resource := self doSomeSetUp. block ensure: [resource reset]]."

	| home savedSender |
	home := thisContext.
	executeAroundBlock value: [
		savedSender := thisContext sender cut: home.
		home
			push: nil;
			jump].
	wrappers addLast: savedSender