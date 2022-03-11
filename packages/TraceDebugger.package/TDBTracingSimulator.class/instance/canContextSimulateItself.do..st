testing
canContextSimulateItself: aContext do: aBlock
	"Must not edit memory from simulated code."

	^ false