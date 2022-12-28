updating
update: aspect

	aspect = #cursorPosition ifTrue:
		["The cursor position was changed externally, reselect the current context."
		selectedContext := nil.
		self selectContext: self interruptedContext.
		
		self flag: #refactor. "For stepping, the cursor does not signal #cursorPosition updates itself, which is not consistent with the reactive approach for filter changes. Refactor #basicDoStep: and the cursor's public stepping protocol to always use observer updates?"].
	aspect = #cursorPositionFromFilter ifTrue:
		["The cursor position was changed externally through a filter change, select the nearest sender of the previous selected context."
		| nextContext |
		nextContext := self treeSelectedContextPath
			ifEmpty: []
			ifNotEmpty: [:path | path last].
		selectedContext := nil. "hack to enforce change in #basicSelectContext: (#tdbIdentical: does not honor different time indices)"
		self selectContext: nextContext].
	
	^ super update: aspect