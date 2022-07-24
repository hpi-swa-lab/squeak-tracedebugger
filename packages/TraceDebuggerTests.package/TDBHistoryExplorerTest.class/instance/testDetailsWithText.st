tests - details
testDetailsWithText

	| text |
	text := self setUpCursorWithText.
	self newExplorer: [cursor exploreHistory: text expression: 'self copy'].
	explorer representationMode: #details.
	
	self assertContextSliceTree:
		#('[] in TDBHistoryExplorerTest>>setUpCursorWithText'
			(('@ 0'))
			('ByteString*>>asText *'
				(('@ *'))
				(('@ *')))
			('Text>>addAttribute:from:to:'
				('RunArray>>copyFrom:to:'
					('at:setRunOffsetAndValue:'
						(('@ *'))
						(('@ *'))
						(('@ *')))
					('at:setRunOffsetAndValue:'
						(('@ *'))
						(('@ *'))))
				('RunArray>>copyReplaceFrom:to:with: copyFrom:to:'
					('at:setRunOffsetAndValue:'
						(('@ *'))
						(('@ *')))
					('at:setRunOffsetAndValue:'
						(('@ *'))
						(('@ *'))))
				(('@ *')))
			('Text>>addAttribute:from:to:'
				('RunArray>>copyFrom:to:'
					('at:setRunOffsetAndValue:'
						(('@ *'))
						(('@ *'))
						(('@ *')))
					('at:setRunOffsetAndValue:'
						(('@ *'))
						(('@ *'))))
				('RunArray>>copyReplaceFrom:to:with: copyFrom:to:'
					('at:setRunOffsetAndValue:'
						(('@ *'))
						(('@ *'))
						(('@ *')))
					('at:setRunOffsetAndValue:'
						(('@ *'))
						(('@ *'))))
				(('@ *')))).
	
	self assertDetailsTextsWithEmphases:
		#(((1 1) '<display error: *UndefinedObject*>' nil nil)
		((1 2 1) '<display error: *UndefinedObject*>' nil nil)
		((1 2 2) 'a Text (13 characters, 1 run):\plonk griffle' (44) (()))
		((1 3 3) 'a Text (13 characters, 2 runs):\plonk griffle' (32 5 8) (() (1) ()))
		((1 4 3) 'a Text (13 characters, 3 runs):\plonk griffle' (32 5 1 7) (() (1) () (2)))).
	
	#((1 2) (1 3) (1 4)) do: [:path |
		explorer
			contextSlice: (self contextSliceAtPath: path)
			expanded: false].
	self assertDetailsTextsWithEmphases:
		#(((1) '*@ 0*<display error: *UndefinedObject*>**asText*a Text (13 characters, 1 run):\plonk griffle**addAttribute:from:to:*a Text (13 characters, 2 runs):\plonk griffle**addAttribute:from:to:*a Text (13 characters, 3 runs):\plonk griffle*' #(8 324 5 78 5 1 7) ((1) () (1) () (1) () (2)))). "hardcoded indices"