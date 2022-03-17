benchmarks
benchExpandAll
	"Benchmark the expansion of all contexs in the tree."
	<timeoutFactor: 3>

	| item previousItem tree |
	self prepare:
		[self openDebuggerForBlock: ['\w+[a-z]*' asRegex].
		tree := window findDeeplyA: PluggableTreeMorph.
		item := previousItem := nil.
		debugger stepOver].
	
	tree specialKeyPressed: Character home asciiValue.
	self displayWindow.
	[tree specialKeyPressed: Character arrowRight asciiValue.
	self displayWindow]
		doWhileTrue: [
			tree selectedMorph = previousItem
				ifTrue:
					[item canExpand
						and: [item isExpanded not]]
				ifFalse:
					[previousItem := item.
					item := tree selectedMorph.
					true]].