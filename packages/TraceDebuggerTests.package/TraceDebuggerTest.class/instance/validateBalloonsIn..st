asserting - toolbuilder
validateBalloonsIn: aMorph

	aMorph allMorphsDo: [:morph |
		self validateBalloonIn: morph].