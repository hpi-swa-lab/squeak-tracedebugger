toolbuilder
buildButtonRowWith: builder from: specs

	^ builder pluggablePanelSpec new
		layout: #horizontal;
		children: (specs
			collect: [:spec | self buildRowButtonFrom: spec with: builder]
			as: OrderedCollection);
		yourself