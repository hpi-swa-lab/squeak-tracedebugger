toolbuilder
buildContentsPane: builder

	^ builder pluggablePanelSpec new
		name: #contents;
		model: self;
		children: #buildContents;
		wantsResizeHandles: true;
		yourself