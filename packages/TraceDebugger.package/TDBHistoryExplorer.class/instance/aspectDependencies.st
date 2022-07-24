updating
aspectDependencies

	^ Dictionary new
		"superclasses"
		at: #contents put: #(expression);
		at: #windowTitle put: #(#labelString);
		
		"model"
		at: #buildContents put: #(buildContextValueTreeWith: representationMode);
		at: #buildContextValueTreeWith: put: #(shouldShrinkColumns);
		at: #contextSliceLabelFor: put: #(contextLabelCompactionStrategy);
		at: #detailsText put: #(selectedContextSlice);
		at: #representationLabel put: #(representationMode);
		at: #rootContextSlices put: #(contextTreeSlice);
		at: #selectedContextSlice put: #(contextTreeSlice);
		at: #updateMemorySlice put: #(cursor object);
		at: #updateContextTreeSlice put: #(memorySlice shouldContractPaths);
		
		yourself