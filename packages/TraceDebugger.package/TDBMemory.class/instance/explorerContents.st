as yet unclassified
explorerContents

	| mirror |
	mirror := thisContext.
	^ values keysSortedSafely replace: [:key |
		ObjectExplorerWrapper
			with: ((values at: key) associations
				collect: [:slotAndRuns |
					(slotAndRuns key < 0
						ifTrue: [(mirror objectClass: key) allInstVarNames at: slotAndRuns key negated]
						ifFalse: [slotAndRuns key])
							-> (slotAndRuns value
									collect: [:startTimeIndexAndValue | startTimeIndexAndValue first -> startTimeIndexAndValue second]
									as: Dictionary)]
				as: Dictionary)
			name: (key printString contractTo: 32)
			model: self]