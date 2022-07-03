updating
aspectDependencies

	^ Dictionary new
		"superclasses"
		at: #contents put: #(expression);
		at: #windowTitle put: #(#labelString);
		
		"model"
		at: #contextSliceLabelFor: put: #(contextLabelCompactionStrategy);
		at: #rootContextSlices put: #(contextTreeSlice);
		at: #updateMemorySlice put: #(cursor object);
		at: #updateContextTreeSlice put: #(memorySlice shouldContractPaths);
		
		yourself