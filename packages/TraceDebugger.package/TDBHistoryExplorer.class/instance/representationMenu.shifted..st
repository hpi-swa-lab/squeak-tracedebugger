menus
representationMenu: menu shifted: shifted

	self allRepresentationModes do: [:mode |
		menu
			tdbAddUpdating: [self representationLabelFor: mode]
			getState: [self representationMode = mode]
			setState: [self representationMode: mode]].
	^ menu