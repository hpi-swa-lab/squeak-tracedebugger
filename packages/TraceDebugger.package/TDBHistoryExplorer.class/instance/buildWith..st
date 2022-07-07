toolbuilder
buildWith: builder

	| spec |
	spec := self buildWindowWith: builder specs:
		{(LayoutFrame new
			rightFraction: 1;
			bottomFraction: self controlBarHeightFraction;
			yourself) -> [self buildControlBar: builder].
		(LayoutFrame new
			topFraction: self controlBarHeightFraction;
			rightFraction: 1;
			bottomFraction: 1;
			yourself) -> [self buildContentsPane: builder]}.
	^ builder build: spec