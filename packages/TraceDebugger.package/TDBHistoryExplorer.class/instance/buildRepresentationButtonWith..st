toolbuilder
buildRepresentationButtonWith: builder

	^ builder pluggableButtonSpec new
		model: self;
		label: #representationLabel;
		style: #menuButton;
		action: #offerRepresentationMenu;
		yourself