examples
exampleShout
	"Note: Collapse the nodes inside the Text for a better appearance.
	
	self exampleShout
	"

	| debugger firstExplorer secondExplorer |
	firstExplorer := (self
		openForBlock:
			[(TextStyler for: #Smalltalk) new
				parseAMethod: true;
				styledTextFor:
'plonk
	| x |
	x := ''Squeak''.
	^ self inform: (''Carpe {1}!'' format: {x})' asText]
		expression: 'self copy')
			model.
	firstExplorer representationMode: #details.
	firstExplorer selectContextSlice: firstExplorer rootContextSlices last lastLeaf.
	
	debugger := firstExplorer debug model.
	debugger findContext: 'SHTextStylerST80>>setAttributesIn:fromRanges: {private}' again: false.
	
	secondExplorer := (debugger cursor
		exploreHistory: debugger selectedContext receiver
		context: debugger selectedContext
		expression: 'self') model.
	secondExplorer representationMode: #details.
	secondExplorer expression: 'aText runs: (RunArray runs: newRuns values: newValues)'.