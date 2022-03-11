toolbuilder
buildValuePaneWith: builder

	^ builder pluggableCodePaneSpec new
		model: self;
		getText: #expression;
		editText: #expression:;
		menu: #codePaneMenu:shifted:;
		help: 'Evaluate expressions for the current tree selection...' translated;
		yourself