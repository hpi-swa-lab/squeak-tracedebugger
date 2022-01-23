support
installSightProtection

	self wrap: [:block | | morph |
		morph := Morph newBounds: Project current world bounds.
		morph  openInWorld.
		block ensure: [morph abandon]].