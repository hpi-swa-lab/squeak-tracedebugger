forwarding - field list
fieldListMenu: menu shifted: shifted

	| fullMenu |
	fullMenu := self inspector fieldListMenu: menu shifted: shifted.
	
	
	"Dismiss items related to pointers. The semantics of these operations would be unclear when the object is referenced in the trace or historic memory."
	fullMenu tdbRemoveAllSelectors: 
		#(objectReferencesToSelection chaseSelectionPointers exploreSelectionPointers).
	
	"Dismiss not-yet-forwarded items."
	fullMenu tdbRemoveAllSelectors: #(editGetterFor:).
	self flag: #todo. "Dispatch to #newCompilationCueFor:requestor: from InspectorField. See: inspector-compilercue.1.cs. Should allow us to improve reuse in TDBInspector>>#createCustomFieldFor:requestor:orCancel: and fix bug that currently, 'add custom field...' does not have access to instvars."
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
			add: 'explore value history (V)' action: #exploreValueHistory;
			balloonTextForLastItem: 'open a window on the history of the current value'.
		self hasSelection ifTrue:
			[fullMenu
				add: 'explore field history (H)' action: #exploreFieldHistory;
				balloonTextForLastItem: 'open a window on the history of the selected field'.
			self debugger ifNotNil:
				[self debugger isDisplayingHistory ifTrue:
					[self flag: #forLater. "support stepping forward until change of value"
					fullMenu
						add: 'step to next change (s)' action: #stepToNextChange;
						balloonTextForLastItem: 'advance the debugger to the next change to the selected field'].
				fullMenu
					add: 'step to previous change (S)' action: #stepToPreviousChange;
					balloonTextForLastItem: 'rewind the debugger to the previous change to the selected field'.
				fullMenu
					add: 'step to change... (C)' action: #stepToChange;
					balloonTextForLastItem: 'search the history of the selected field and move the debugger to any selected change to the field']]].
	
	
	^ fullMenu