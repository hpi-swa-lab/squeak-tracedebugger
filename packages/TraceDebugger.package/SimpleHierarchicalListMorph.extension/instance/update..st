*TraceDebugger-UI-updating-override
update: aSymbol 
	aSymbol == getSelectionSelector 
		ifTrue: 
			[self updateSelection.
			^self].
	aSymbol == getListSelector 
		ifTrue: 
			[self list: self getList.
			^self].
	aSymbol == #expandAllNodes "<-- TraceDebugger"
		ifTrue:
			[self flag: #moveUpstream.
			self expandAllNodes.
			^self].
	aSymbol == autoExpandSelector
		ifTrue:
			[self updateAutoExpand.
			^self].
	((aSymbol isKindOf: Array) 
		and: [aSymbol notEmpty and: [aSymbol first == #openPath]]) 
			ifTrue: 
				[^(scroller submorphs at: 1 ifAbsent: [^self]) 
					openPath: aSymbol allButFirst]