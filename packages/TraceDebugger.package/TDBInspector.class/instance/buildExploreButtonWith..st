toolbuilder
buildExploreButtonWith: aBuilder

	^ (self inspector buildExploreButtonWith: aBuilder)
		model: self; "for monkey-patching the behavior of the original inspector"
		yourself