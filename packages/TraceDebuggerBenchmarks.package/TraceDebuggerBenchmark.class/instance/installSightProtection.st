support
installSightProtection
	"Occlude all other morphs in the world to ignore their drawing costs in #displayWindow."

	self wrap: [:block | | morph |
		morph := Morph newBounds: Project current world bounds.
		morph openInWorld.
		block ensure: [morph abandon]].