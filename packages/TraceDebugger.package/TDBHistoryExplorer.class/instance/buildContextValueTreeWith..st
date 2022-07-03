toolbuilder
buildContextValueTreeWith: builder

	^ (self buildContextTreeWith: builder)
		name: #contextValueTree;
		
		columns:
			{[:listMorph | (listMorph filteredItems collect: [:item |
				item preferredWidthOfColumn: 1]) max].
			[:listMorph | (listMorph filteredItems collect: [:item |
				item preferredWidthOfColumn: 2]) max]};
		
		yourself