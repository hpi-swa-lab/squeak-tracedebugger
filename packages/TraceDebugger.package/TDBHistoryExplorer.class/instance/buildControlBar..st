toolbuilder
buildControlBar: builder

	| buttonOffset spawnButton |
	spawnButton := self buildSpawnButtonWith: builder.
	buttonOffset := (((self allRepresentationModes collect: [:mode | self representationLabelFor: mode]) copyWith: spawnButton label) collect: [:label | (Preferences standardButtonFont widthOfString: label)]) max * (3 / 2).
	^ builder pluggablePanelSpec new
		children:
			(OrderedCollection new
				add: ((self buildCodePaneWith: builder)
					frame:
						(LayoutFrame fullFrame
							rightOffset: buttonOffset * 2 negated;
							yourself);
					yourself);
				add:
					(spawnButton
						frame:
							(LayoutFrame fullFrame
								leftFraction: 1;
								rightOffset: buttonOffset negated;
								leftOffset: buttonOffset negated * 2;
								yourself)
						yourself);
				add:
					((self buildRepresentationButtonWith: builder)
						frame:
							(LayoutFrame fullFrame
								leftFraction: 1;
								leftOffset: buttonOffset negated;
								yourself)
						yourself);
				yourself);
		yourself