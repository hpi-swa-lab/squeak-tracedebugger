examples
exampleWorldCyclesFor: aDuration
	"
	Trace entire world cycles in Morphic, including event handling and drawing. Very helpful for exploring or investigating crazy event handling issues (for example, try to trace a halo invocation). However, not super fast, usually it works best when you open a new empty Morphic project for this or close all other windows. Or you are reading this in 2084 and are laughing at this antiquated comment. :-)
	
	self exampleWorldCyclesFor: 5 seconds
	"

	| button recording |
	button := SimpleButtonMorph new
		actionSelector: #value;
		label: ('record world (for {1})' format: {aDuration});
		yourself.
	recording := false.
	button target:
		[| priorLabel world |
		recording ifTrue: [^ Processor activeProcess in: [:process | [process terminate] fork]].
		recording := true.
		priorLabel := button label.
		button label: 'recording... (click to stop)'.
		world := Project current world.
		world doOneCycleNow.
		[self traceAndOpenForBlock: [world tdbCycleFor: aDuration] quiet: true]
			ensure:
				[recording := false.
				button label: priorLabel]].
	^ button openInHand