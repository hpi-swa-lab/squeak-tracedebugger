forwarding - tree
explorerKey: aChar from: view event: event
	"Copied from ObjectExplorer and adjusted to forward all actions through the receiver."

	| selector |
	event anyModifierKeyPressed ifFalse: [^ false].
	
	selector := aChar
		caseOf:
			{[$i] -> [#inspectSelection].
			[$I] -> [#exploreSelection].
			[$b] -> [#browseFull].
			[$h] -> [#browseClassHierarchy].
			[$c] -> [#copyName].
			[$p] -> [#browseFullProtocol].
			[$N] -> [#browseClassRefs].
			[$v] -> [#viewerForValue]}
		otherwise: [^ self explorer explorerKey: aChar from: view event: event].

	^ self perform: selector orSendTo: self explorer