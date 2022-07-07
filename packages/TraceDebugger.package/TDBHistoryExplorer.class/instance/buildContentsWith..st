toolbuilder
buildContentsWith: builder

	| specs |
	specs := OrderedCollection new.
	
	self representationMode = #list
		ifFalse:
			[specs
				add:
					((self buildContextTreeWith: builder)
						frame:
							(LayoutFrame fullFrame
								rightFraction: self contextTreeWidthFraction
								yourself);
						yourself);
				add:
					((self buildValuePaneWith: builder)
						frame:
							(LayoutFrame fullFrame
								leftFraction: self contextTreeWidthFraction;
								yourself);
						yourself)];
		ifTrue:
			[specs add:
				((self buildContextValueTreeWith: builder)
					layoutFrame: "frame:" LayoutFrame fullFrame;
					yourself)].
	
	^ specs