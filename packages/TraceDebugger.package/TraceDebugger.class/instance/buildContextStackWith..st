toolbuilder
buildContextStackWith: aBuilder

	^ aBuilder pluggablePanelSpec new
		model: self;
		children: #buildContextStackItems;
		wantsResizeHandles: true;
		yourself