toolbuilder
buildEmbeddedWith: aBuilder label: aString help: anotherString
	"For embedding into a TraceDebugger."

	| panel |
	panel := aBuilder pluggablePanelSpec new
		children: OrderedCollection new;
		wantsResizeHandles: true;
		yourself.
	^ self buildWindow: panel with: aBuilder specs:
		{(0 @ 0 corner: 0.4 @ 1) -> [(self buildFieldListWith: aBuilder)
			help: aString;
			yourself].
		(0.4 @ 0 corner: 1 @ 1) -> [(self buildValuePaneWith: aBuilder)
			help: anotherString;
			yourself]}