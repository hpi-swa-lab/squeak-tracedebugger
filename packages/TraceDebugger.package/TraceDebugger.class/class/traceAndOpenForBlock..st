opening
traceAndOpenForBlock: aBlock
	"Create a new debugger for aBlock, trace its execution, and display the filled debugger."

	^ self traceAndOpenOn:
		(Process forBlock: [aBlock value])