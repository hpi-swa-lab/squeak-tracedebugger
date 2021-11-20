toolbuilder
buildInspectorsWith: aBuilder

	| panel parts |
	panel := aBuilder pluggablePanelSpec new
		children: OrderedCollection new;
		wantsResizeHandles: true;
		yourself.
	parts := {self buildReceiverInspectorWith: aBuilder. self buildContextVariablesInspectorWith: aBuilder}.
	panel children addAll: (parts withIndexCollect: [:part :index |
		part children collect: [:spec | spec copy
			frame: ((spec frame translateBy: index - 1 @ 0) scaleBy: parts size reciprocal @ 1);
			yourself]]) flatten.
	^ panel