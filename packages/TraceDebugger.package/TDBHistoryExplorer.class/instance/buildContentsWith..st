toolbuilder
buildContentsWith: builder

	| specs |
	specs := OrderedCollection new.
	
	self representationMode = #list
		ifFalse:
			[specs
				add:
					((self buildContextTreeWith: builder)
						layoutFrame:
							(LayoutFrame fullFrame
								rightFraction: self contextTreeWidthFraction;
								bottomOffset: self navigationBarHeight negated;
								yourself);
						yourself);
				add:
					((self buildDetailsWith: builder)
						frame:
							(LayoutFrame fullFrame
								leftFraction: self contextTreeWidthFraction;
								bottomOffset: self navigationBarHeight negated;
								yourself);
						yourself);
				add:
					((self buildNavigationBarWith: builder)
						frame:
							(LayoutFrame fullFrame
								topFraction: 1;
								topOffset: self navigationBarHeight negated;
								yourself);
						yourself)];
		ifTrue:
			[specs add:
				((self buildContextValueTreeWith: builder)
					layoutFrame: "frame:" LayoutFrame fullFrame;
					yourself)].
	
	^ specs