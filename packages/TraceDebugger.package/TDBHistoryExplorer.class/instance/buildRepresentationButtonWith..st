toolbuilder
buildRepresentationButtonWith: builder

	^ builder pluggableButtonSpec new
		model: self;
		label: #representationLabel;
		style: #menuButton;
		action: #offerRepresentationMenu;
		help: 'choose a representation mode for the displayed history';
		yourself