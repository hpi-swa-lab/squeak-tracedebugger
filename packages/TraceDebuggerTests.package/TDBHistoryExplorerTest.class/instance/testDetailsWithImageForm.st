tests - details
testDetailsWithImageForm

	| text |
	text := self setUpCursorWithMorph.
	self newExplorer: [cursor exploreHistory: text expression: 'self imageForm'].
	explorer representationMode: #details.
	
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursorWithMorph'
			(('@ 0'))
			('Morph class*>>new *' *)
			(('Morph>>extent:'))
			('Morph>>color:' *)).
	
	#((1 2) (1 4)) do: [:path |
		explorer
			contextSlice: (self contextSliceAtPath: path)
			expanded: false].
	
	self assertDetailsTextsWithForm:
		#(((1 1) '<error: *>' nil nil)
		((1 2) 'Form(50x40x32)*' (50 40) (blue transparent))
		((1 3) 'Form(15x3x32)*' (15 3) (blue))
		((1 4) 'Form(15x3x32)*' (15 3) (red))).
	
	self assertDetailsTexts:
		#(((1) '*@ 0*<error: *>**initialize*Form(50x40x32)**extent:*Form(15x3x32)**color:*Form(15x3x32)*')).