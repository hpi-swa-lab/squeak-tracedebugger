toolbuilder
buildFullWith: aBuilder

	^ self buildWindowWith: aBuilder specs:
		{(0 @ 0 corner: 1 @ 0.22) -> [self buildContextTreeWith: aBuilder].
		(0 @ 0.22 corner: 1 @ 0.8) -> [self buildCodePaneWith: aBuilder].
		(0 @ 0.8 corner: 1 @ 1) -> [self buildInspectorsWith: aBuilder]}