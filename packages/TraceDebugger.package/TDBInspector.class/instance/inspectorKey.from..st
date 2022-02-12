forwarding - field list
inspectorKey: aChar from: view
	"Respond to a Command key issued while the cursor is over my field list"

	| selector |
	selector := aChar
		caseOf: {
			[$x]	->	[#removeSelection].
			
			[$i]		->	[#inspectSelection].
			[$I]		->	[#exploreSelection].
			[$b]	->	[#browseClass].
			[$h]	->	[#browseClassHierarchy].
			[$p]	->	[#browseFullProtocol].
			[$r]		->	[#browseVariableReferences].
			[$a]	->	[#browseVariableAssignments].
			[$N]	->	[#browseClassRefs].
			[$c]	->	[#copyName].
			[$t]		->	[#tearOffTile].
			[$v]	->	[#viewerForValue] }
		otherwise:	[^self arrowKey: aChar from: view].
	self perform: selector orSendTo: self inspector.