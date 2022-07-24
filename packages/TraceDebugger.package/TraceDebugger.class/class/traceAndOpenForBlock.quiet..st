opening
traceAndOpenForBlock: aBlock quiet: quiet
	"Create a new debugger for aBlock, trace its execution, and display the filled debugger. Unless quiet is true, inform the user during the tracing."

	^ (self
		 traceAndOpenOn:
			(aBlock newProcess
				name: aBlock decompile decompileString;
				yourself)
		quiet: quiet)
			model
				stepInto;
				toggleBorderContext;
				containingWindow