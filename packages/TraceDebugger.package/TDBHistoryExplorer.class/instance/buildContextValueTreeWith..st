toolbuilder
buildContextValueTreeWith: builder

	^ (self buildContextTreeWith: builder)
		name: #contextValueTree;
		
		"icon:"getIconSelector: #contextSliceIconFor:;
		columns:
			((1 to: 2) collect: [:index |
				[:listMorph |
					| items |
					items := listMorph filteredItems.
					self shouldShrinkColumns ifTrue:
						[items := items select: [:item | self isDisplayedAsLeaf: item complexContents item]].
					(items collect: [:item | item preferredWidthOfColumn: index]) max]]);
		
		yourself