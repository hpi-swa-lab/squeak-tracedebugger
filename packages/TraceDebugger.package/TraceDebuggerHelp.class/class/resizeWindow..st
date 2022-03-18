private
resizeWindow: result
	"Resize the window so that all figures are fully visible."

	| window |
	window := (Project current world submorphs , self currentHand submorphs) detect: [:m | (m isKindOf: SystemWindow) and: [m model isKindOf: HelpBrowser]] ifNone: [^ result]..
	window extent: window extent + (225 @ 0).
	window allMorphs detect: [:m | (m isKindOf: ProportionalSplitterMorph) and: [m splitsLeftAndRight]] ifFound: [:splitter |
		splitter repositionBy: -90 @ 0].
	
	^ result