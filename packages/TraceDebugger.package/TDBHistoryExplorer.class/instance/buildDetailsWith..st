toolbuilder
buildDetailsWith: builder

	^ builder pluggableTextSpec new
		model: self;
		getText: #detailsText;
		frame: LayoutFrame fullFrame;
		yourself