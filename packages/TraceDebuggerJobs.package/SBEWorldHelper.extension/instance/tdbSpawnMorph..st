*TraceDebuggerJobs-utils
tdbSpawnMorph: aMorph

	| imageMorph |
	self flag: #moveUpstream.
	
	imageMorph := aMorph imageForm asMorph
		topLeft: aMorph fullBounds topLeft;
		yourself.
	
	(self world respondsTo: #addMorphFrontInLayer:)
		ifFalse: ["< Morphic-mt.1726 (6.0)"
			self world addMorph: imageMorph.
			^ self].
	
	imageMorph morphicLayerNumber: Morph frontmostLayer.
	self world addMorphFrontInLayer: imageMorph.