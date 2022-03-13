examples
exampleWorldCyclesFor: aDuration
	"
	Trace entire world cycles in Morphic, including event handling and drawing. Very helpful for exploring or investigating crazy event handling issues (for example, try to trace a halo invocation). However, not super fast, usually it works best when you open a new empty Morphic project for this or close all other windows. Or you are reading this in 2084 and are laughing at this antiquated comment. :-)
	
	self exampleWorldCyclesFor: 5 seconds
	"

	| button |
	button := SimpleButtonMorph new
		target: [Project current world tdbCycleFor: aDuration];
		actionSelector: #traceAndDebug;
		label: ('recorld world (for {1})' format: {aDuration});
		yourself.
	^ button openInHand