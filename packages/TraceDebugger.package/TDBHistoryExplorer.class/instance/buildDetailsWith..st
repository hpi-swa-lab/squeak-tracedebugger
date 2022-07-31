toolbuilder
buildDetailsWith: builder

	^ builder pluggableTextSpec new
		model: self;
		name: #detailsText;
		getText: #detailsText;
		frame: LayoutFrame fullFrame;
		yourself