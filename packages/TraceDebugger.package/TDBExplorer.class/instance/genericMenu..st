forwarding - tree
genericMenu: menu

	| fullMenu |
	fullMenu := self menu: menu for: #(genericMenu genericMenuShifted:) shifted: false.
	
	fullMenu := self explorer genericMenu: fullMenu.
	
	"Dismiss items not appropriate for proxies."
	self trimMenu: fullMenu removeAllSelectors: 
		#(objectReferencesToSelection chasePointersForSelection explorePointersForSelection  "The semantics of these operations would be unclear when the object is referenced in the trace or historic memory."
		monitorSelection "Proxies do not change.").
	
	"Dismiss not-yet-forwarded items."
	self trimMenu: fullMenu removeAllSelectors:
		#(referencesToSelection defsOfSelection).
	
	^ fullMenu