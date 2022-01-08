benchmarks
benchFactorial
	<timeoutFactor: 3>

	| factor |
	factor := self factorialFactor.
	simulator evaluate: [factor factorial].