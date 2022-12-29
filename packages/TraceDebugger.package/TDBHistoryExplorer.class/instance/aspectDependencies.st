updating
aspectDependencies

	^ Dictionary new
		"superclasses"
		at: #contents put: #(expression);
		at: #windowTitle put: #(#labelString);
		
		"model"
		at: #buildContents put: #(buildContextValueTreeWith: representationMode);
		at: #buildContextValueTreeWith: put: #(shouldShrinkColumns);
		at: #canStepBackward put: #(hasContextSliceSelected);
		at: #canStepForward put: #(hasContextSliceSelected);
		at: #contextSliceLabelFor: put: #(contextLabelCompactionStrategy contextLabelTruncation);
		at: #detailsText put: #(selectedContextSlice);
		at: #filterResult: put: #(shouldHideErrors valueFilter);
		at: #hasContextSliceSelected put: #(selectedContextSlice);
		at: #maximumSliderIndex put: #(contextTreeSlice);
		at: #representationLabel put: #(representationMode);
		at: #rootContextSlices put: #(contextTreeSlice);
		at: #selectedContextSlice put: #(contextTreeSlice);
		at: #sliderIndex put: #(selectedContextSlice);
		at: #updateMemorySlice put: #(cursor object);
		at: #updateContextTreeSlice put: #(filterResult: memorySlice shouldContractPaths);
		
		yourself