asserting - toolbuilder
validateMenusIn: aMorph

	aMorph allMorphs
		select: [:morph | morph respondsTo: #getMenu:]
		thenDo: [:morph |
			self validateMenu: (morph getMenu: false).
			self validateMenu: (morph getMenu: true)].