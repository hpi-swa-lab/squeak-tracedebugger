toolbuilder
buildValuesWith: builder

	^ builder pluggableTextSpec new
		model: self;
		getText: #valueString;
		frame: LayoutFrame fullFrame;
		yourself