toolbuilder
buildCodePaneWith: builder

	^ builder pluggableCodePaneSpec new
		model: self;
		name: #codePane;
		help: 'evaluate expression on traced object';
		getText: #contents;
		setText: #contents:notifying:;
		selection: #contentsSelection;
		menu: #codePaneMenu:shifted:;
		yourself