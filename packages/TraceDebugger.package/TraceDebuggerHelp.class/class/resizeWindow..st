private
resizeWindow: result
	"Resize the window so that all figures are fully visible."

	| window |
	window := (self currentHand submorphs , Project current world submorphs) detect: [:m | (m isKindOf: SystemWindow) and: [m model isKindOf: HelpBrowser]] ifNone: [^ result].
	window extent: (window width clampLow: 875) @ window height.
	window allMorphs detect: [:m | (m isKindOf: ProportionalSplitterMorph) and: [m splitsLeftAndRight]] ifFound: [:splitter |
		splitter repositionBy: (170 - (splitter owner fullBounds; findA: PluggableTreeMorph) width) @ 0].
	
	^ result