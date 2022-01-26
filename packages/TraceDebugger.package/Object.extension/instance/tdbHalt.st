*TraceDebugger-Core
tdbHalt
	"This is the typical message to use for inserting breakpoints during 
	debugging. It behaves like halt:, but does not call on halt: in order to 
	avoid putting this message on the stack. Halt is especially useful when 
	the breakpoint message is an arbitrary one."

	^ TraceDebugger
		openOn: Processor activeProcess
		context: thisContext sender
		label: thisContext selector
		contents: nil
		fullView: true