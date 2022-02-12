forwarding - field list
fieldListMenu: menu shifted: shifted

	| fullMenu |
	fullMenu := self inspector fieldListMenu: menu shifted: shifted.
	
	fullMenu items do: [:item |
		"Dismiss items related to pointers. The semantics of these operations would be unclear when the object is referenced in the trace or historic memory."
		(#(objectReferencesToSelection chaseSelectionPointers exploreSelectionPointers) includes: item selector)
			ifTrue:
				[item submorphAfter ifNotNil: [:after |
					after knownName = #line
						ifTrue: [after delete]].
				item delete]].
	
	^ fullMenu