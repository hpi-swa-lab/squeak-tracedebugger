as yet unclassified
defaultBounds
	"very small to avoid taking too large rigid extents during toolbuilding
	With a larger default height, the slider at the bottom of TDBHistoryExplorer extrudes during initial construction (TDBHistoryExplorer openDetailsForBlock: [])."
	^ 0 @ 0 corner: 1 px @ 1 px