*TraceDebugger-UI-toolbuilder - private
computeViewProperty: aBlock ifError: errorBlock
	"Compute and return the value of a view property by evaluating aBlock, suppressing any debugger raised during the execution. This is required to avoid debugger chains in Morphic for model properties that are retrieved high-frequently from the world, e.g., while displaying the morph (this can still crash your image when opening an interrupt debugger - see Morphic-ct.1610 (inbox)), or while handling mouseOver events (see Morphic-ct.1636 (inbox))."
	
	self flag: #workaround. "The views should care about this."
	
	^ aBlock
		on: (Error, Warning, Halt), UnhandledError
		do: [:ex | errorBlock cull: ex description]