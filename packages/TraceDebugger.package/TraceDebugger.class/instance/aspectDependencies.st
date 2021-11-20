updating
aspectDependencies

	^ Dictionary new
		at: #contents put: #(currentCompiledMethod);
		at: #currentCompiledMethod put: #(selectedContext);
		at: #cursorPosition put: #(cursor);
		at: #selectedContext put: #(cursorPosition);
		at: #selectedMessage put: #(currentCompiledMethod);
		at: #treeSelectedContext put: #(selectedContext);
		at: #windowTitle put: #(labelString);
		yourself