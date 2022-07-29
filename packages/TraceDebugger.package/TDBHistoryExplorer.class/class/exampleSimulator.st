examples
exampleSimulator
	"A debugger made entirely of object traces.
	
	self exampleSimulator
	"
	<timeout: 30 "seconds">

	| block context cursor |
	self flag: #coroutines. "Currently, the context tree slice lacks all the details."
	
	block := [Array with: 2].
	cursor := self cursorClass traceForBlock: [Simulator evaluate: block].
	context := cursor
		findContextSuchThat: [:c | c method == (SimulationContext >> #runSimulated:contextAtEachStep:)]
		startingAtTime: 0.
	^ cursor
		exploreHistory: context receiver
		context: context
		expression:
'| map pcRange source stack |
map := current debuggerMap.
pcRange := map
	rangeForPC: (current pc ifNil: [current method endPC])
	in: current method
	contextIsActiveContext: true.
source := current debuggerMap sourceText asText
	makeSelectorBold;
	addAllAttributes: {TextEmphasis bold. TextColor red}
		from: pcRange first
		to: pcRange last;
	yourself.
stack := (current stackUpTo: home) joinSeparatedBy: String cr.

''Stack:\{1}\\{2}\\Variables:\{3}'' withCRs asText format: {stack. source. current allTempsAndValues}'