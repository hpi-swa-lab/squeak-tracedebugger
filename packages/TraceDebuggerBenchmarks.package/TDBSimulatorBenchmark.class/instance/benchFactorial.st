benchmarks
benchFactorial
	"Benchmark simulating a recursion- and primitive-intensive operation."
	<timeoutFactor: 3>

	| factor |
	factor := self factorialFactor.
	simulator evaluate: [factor factorial].