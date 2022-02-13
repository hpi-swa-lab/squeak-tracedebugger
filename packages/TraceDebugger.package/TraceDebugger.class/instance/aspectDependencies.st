updating
aspectDependencies

	^ Dictionary new
		"CodeHolder"
		at: #annotation put: #(currentCompiledMethod);
		at: #contents put: #(currentCompiledMethod);
		at: #currentCompiledMethod put: #(selectedContext);
		at: #windowTitle put: #(labelString);
		
		"context and cursor"
		at: #canProceed put: #(interruptedContext isDisplayingHistory);
		at: #canStepBackward put: #(cursorPosition);
		at: #canStepForward put: #(cursorPosition selectedContext);
		at: #childContextsFor: put: #(cursorPosition);
		at: #contentsSelection put: #(pcRange);
		at: #contextStack put: #(interruptedContext);
		at: #cursorPosition put: #(cursor);
		at: #interruptedContext put: #(cursorPosition);
		at: #hasContextSelected put: #(selectedContext);
		at: #isDisplayingHistory put: #(cursorPosition);
		at: #labelString put: #(cursorPosition hasContextSelected isDisplayingHistory);
		at: #pcRange put: #(cursorPosition);
		at: #selectedMessage put: #(currentCompiledMethod);
		
		"toolbuilder"
		at: #defaultWindowColor put: #(isDisplayingHistory);
		at: #treeSelectedContext put: #(selectedContext);
		"at: #treeSelectedContextPath put: #(selectedContext);"
		at: #treeRootContexts put:
			{#rootContexts.
			#interruptedContext flag: #workaround "update the entire tree to miss no new message sends anywhere"};
		at: #windowColorToUse put: #(defaultWindowColor);
		
		yourself