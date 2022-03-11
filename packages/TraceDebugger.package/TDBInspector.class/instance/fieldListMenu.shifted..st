forwarding - field list
fieldListMenu: menu shifted: shifted

	| fullMenu |
	fullMenu := self inspector fieldListMenu: menu shifted: shifted.
	
	"Dismiss items related to pointers. The semantics of these operations would be unclear when the object is referenced in the trace or historic memory."
	self trimMenu: fullMenu removeAllSelectors: 
		#(objectReferencesToSelection chaseSelectionPointers exploreSelectionPointers).
	
	"Dismiss not-yet-forwarded items."
	self trimMenu: fullMenu removeAllSelectors: 
		#(editGetterFor: editSetterFor:).
	self flag: #todo. "Dispatch to #newCompilationCueFor:requestor: from InspectorField. See: inspector-compilercue.1.cs"
	"menu items do: [:item |
		(#(editGetterFor: editSetterFor:) includes: item selector)
			ifTrue:
				[self assert: item arguments first == self inspector.
				item arguments: (item arguments allButFirst copyWithFirst: self)]]."
	
	^ fullMenu