tests - ui
testBuildNotifierWithMessage

	| window |
	window := self testBuildNotifier: 'plonk'.
	self assert: ((window allStringsAfter: nil) includes: 'plonk').