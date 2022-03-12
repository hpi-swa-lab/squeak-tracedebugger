*TraceDebugger-UI-support
bench: stepBlock for: aDuration
	"
	self bench: [self stepInto] for: 5 seconds
	"

	| result steps |
	steps := 0.
	result := [stepBlock value.
	steps := steps + 1.
	Project current world displayWorld] benchFor: aDuration.
	^ '{1} steps. {2}' format: {steps. result}