toolbuilder
buildControlBar: builder

	^ builder pluggablePanelSpec new
		layout: #horizontal;
		children:
			(OrderedCollection new
				add: (self buildCodePaneWith: builder);
				add:
					((self buildSpawnButtonWith: builder)
						horizontalResizing: #shrinkWrap;
						yourself);
				add:
					((self buildRepresentationButtonWith: builder)
						horizontalResizing: #shrinkWrap;
						yourself);
				yourself);
		yourself