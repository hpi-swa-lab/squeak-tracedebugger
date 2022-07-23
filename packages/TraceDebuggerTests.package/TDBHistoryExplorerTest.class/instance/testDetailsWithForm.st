tests - details
testDetailsWithForm

	| text relevantText |
	text := self setUpCursorWithForm.
	self newExplorer: [cursor exploreHistory: text expression: 'self'].
	explorer representationMode: #details.
	
	self assertContextSliceTree:
		#(('[] in TDBHistoryExplorerTest>>setUpCursorWithForm')).
	
	self assertDetailsTexts:
		#(((1) '*fray*out**@ 0*<display error*UndefinedObject*>**extent:depth:**setExtent:depth:*Form(15x10x32)**FormCanvas>>fillRectangle:fillStyle:*Form(15x10x32)**frameRectangle:borderStyle:*frameRect:borderWidth:*Form(15x10x32)**frameRectangle:borderStyle:*frameRect:borderWidth:*Form(15x10x32)**frameRectangle:borderStyle:*frameRect:borderWidth:*Form(15x10x32)**frameRectangle:borderStyle:*frameRect:borderWidth:*Form(15x10x32)*')).
	
	relevantText := explorer detailsText.
	relevantText addAttribute: (TextColor color: Color transparent).
	self
		assert: {Color transparent. Color yellow. Color green} asSet
		equals: relevantText asMorph imageForm colorsUsed asSet.