updating
aspectDependencies

	^ Dictionary new
		"CodeHolder"
		at: #annotation put: #(currentCompiledMethod);
		at: #contents put: #(currentCompiledMethod);
		at: #currentCompiledMethod put: #(selectedContext);
		at: #windowTitle put: #(labelString);
		
		"context and cursor"
		at: #canStepBackward put: #(selectedContext);
		at: #canStepForward put: #(selectedContext);
		at: #childContextsFor: put: #(cursorPosition);
		at: #contextStack put: #(interruptedContext);
		at: #cursorPosition put: #(cursor);
		at: #interruptedContext put: #(cursorPosition);
		at: #isDisplayingHistory put: #(cursorPosition);
		at: #labelString put: #(isDisplayingHistory);
		at: #rootContexts put: #(contextStack);
		at: #selectedMessage put: #(currentCompiledMethod);
		
		"toolbuilder"
		at: #defaultWindowColor put: #(isDisplayingHistory);
		at: #treeSelectedContext put: #(selectedContext);
		"at: #treeSelectedContextPath put: #(selectedContext);"
		at: #treeRootContexts put: #(rootContexts);
		at: #windowColorToUse put: #(defaultWindowColor);
		
		yourself