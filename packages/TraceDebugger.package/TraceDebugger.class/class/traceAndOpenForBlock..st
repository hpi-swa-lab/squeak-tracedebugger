opening
traceAndOpenForBlock: aBlock
	"Create a new debugger for aBlock, trace its execution, and display the filled debugger."

	^ (self newOn:
		(Process forBlock: [aBlock value]))
			stepOver;
			restart;
			stepInto;
			open