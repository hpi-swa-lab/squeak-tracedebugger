forwarding - field list
fieldListMenu: menu shifted: shifted

	| fullMenu |
	fullMenu := self inspector fieldListMenu: menu shifted: shifted.
	
	
	"Dismiss items related to pointers. The semantics of these operations would be unclear when the object is referenced in the trace or historic memory."
	fullMenu tdbRemoveAllSelectors: 
		#(objectReferencesToSelection chaseSelectionPointers exploreSelectionPointers).
	
	"Dismiss not-yet-forwarded items."
	fullMenu tdbRemoveAllSelectors: #(editGetterFor:).
	self flag: #todo. "Dispatch to #newCompilationCueFor:requestor: from InspectorField. See: inspector-compilercue.1.cs"
	"menu items do: [:item |
		(#(editGetterFor:) includes: item selector)
			ifTrue:
				[self assert: item arguments first == self inspector.
				item arguments: (item arguments allButFirst copyWithFirst: self)]]."
	
	"Dismiss inappropiate field items."
	fullMenu tdbRemoveAllSelectors: #(editSetterFor:). "Editing historic state is currently undefined, see #24."
	
	
	"Add new items."
	fullMenu tdbInsertBeforeFirstLine:
		[fullMenu
			add: 'explore value history' action: #exploreValueHistory;
			balloonTextForLastItem: 'open a window on the history of the current value';
			add: 'explore field history' action: #exploreFieldHistory;
			balloonTextForLastItem: 'open a window on the history of the selected field'].
	
	
	^ fullMenu