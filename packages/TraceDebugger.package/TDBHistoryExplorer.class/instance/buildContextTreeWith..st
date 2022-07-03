toolbuilder
buildContextTreeWith: builder

	| spec widget |
	spec := builder pluggableTreeSpec new
		model: self;
		name: #contextTree;
		roots: #rootContextSlices;
		getChildren: #childContextSlicesFor:;
		getSelected: #selectedContextSlice;
		setSelected: #selectContextSlice:;
		
		label: #contextSliceLabelFor:;
		icon: #contextSliceIconFor:;
		help: #contextSliceToolTipFor:;
		menu: #contextSliceMenu:shifted:;
		keyPress: #contextSliceKey:from:event:;
		
		hScrollBarPolicy: #whenNeeded;
		yourself.
	
	widget := builder build: spec.
	
	widget noteExpandSelector: #contextSlice:expanded:.
	self flag: #moveUpstream. "and add a selector on PluggableTreeSpec"
	
	self expandAllContextTreeSlices.
	
	^ widget