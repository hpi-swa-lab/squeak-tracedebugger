toolbuilder
buildContentsPane: builder

	^ builder pluggablePanelSpec new
		model: self;
		children: #buildContents;
		wantsResizeHandles: true;
		yourself