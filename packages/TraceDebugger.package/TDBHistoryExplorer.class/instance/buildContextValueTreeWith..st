toolbuilder
buildContextValueTreeWith: builder

	^ (self buildContextTreeWith: builder)
		name: #contextValueTree;
		
		"icon:"getIconSelector: #contextSliceIconFor:;
		update: #contextSliceIconFor:; "update icons"
		columns:
			((1 to: 2) collect: [:index |
				[:listMorph |
					| items |
					items := listMorph filteredItems.
					(self shouldShrinkColumns and: [index = 1]) ifTrue:
						[items := items select: [:item | self isDisplayedAsLeaf: item complexContents item]].
					(items collect: [:item | item preferredWidthOfColumn: index]) max]]);
		
		yourself