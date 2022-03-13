opening
traceAndOpenForBlock: aBlock
	"Create a new debugger for aBlock, trace its execution, and display the filled debugger."

	^ (self traceAndOpenOn:
		(aBlock newProcess
			name: aBlock decompile decompileString;
			yourself))
		model
			stepInto;
			toggleBorderContext;
			containingWindow