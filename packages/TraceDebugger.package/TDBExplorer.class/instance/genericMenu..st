forwarding - tree
genericMenu: menu

	| fullMenu |
	fullMenu := self menu: menu for: #(genericMenu genericMenuShifted:) shifted: false.
	
	fullMenu := self explorer genericMenu: fullMenu.
	
	
	"Dismiss items not appropriate for proxies."
	fullMenu
		tdbRemoveAllSelectors: 
			#(objectReferencesToSelection chasePointersForSelection explorePointersForSelection  "The semantics of these operations would be unclear when the object is referenced in the trace or historic memory."
			monitorSelection "Proxies do not change.")
		reverse: true.
	
	"Dismiss not-yet-forwarded items."
	fullMenu tdbRemoveAllSelectors:
		#(referencesToSelection defsOfSelection).
	
	
	"Add new items."
	fullMenu tdbInsertBeforeFirstLine:
		[fullMenu add: 'explore value history' action: #exploreValueHistory].
	
	
	^ fullMenu