forwarding - field list
inspectorKey: aChar from: view
	"Copied from Inspector."

	| selector |
	selector := aChar
		caseOf:
			{[$x]	->	[#removeSelection].
			
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
		otherwise:	[^ self inspector inspectorKey: aChar from: view].
	
	^ self perform: selector orSendTo: self inspector