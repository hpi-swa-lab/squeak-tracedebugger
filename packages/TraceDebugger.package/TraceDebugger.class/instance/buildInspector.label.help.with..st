toolbuilder
buildInspector: anInspector label: aString help: anotherString with: aBuilder

	| panel |
	panel := aBuilder pluggablePanelSpec new
		children: OrderedCollection new;
		wantsResizeHandles: true;
		yourself.
	^ self buildWindow: panel with: aBuilder specs:
		{(0 @ 0 corner: 0.4 @ 1) -> [(anInspector buildFieldListWith: aBuilder)
			help: aString;
			yourself].
		(0.4 @ 0 corner: 1 @ 1) -> [(anInspector buildValuePaneWith: aBuilder)
			help: anotherString;
			yourself]}