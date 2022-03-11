updating
update: aspect

	aspect = #cursorPosition ifTrue:
		["The cursor position was changed externally, reselect the current context (or a sender of it that is hidden by a filter)."
		self changed: #cursorPosition.
		self selectContext: (self treeSelectedContextPath
			ifEmpty: []
			ifNotEmpty: [:path | path last])].
	
	^ super update: aspect