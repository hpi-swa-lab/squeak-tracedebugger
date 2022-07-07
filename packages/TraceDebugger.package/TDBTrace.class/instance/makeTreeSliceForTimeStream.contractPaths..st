accessing - descendants
makeTreeSliceForTimeStream: timeIndicesStream contractPaths: contractPaths
	"Create a slice of the context tree that contains all contexts that intersect with the timeIndices from the consumed stream. If contractPaths is set to true, contract the tree to avoid degenerated nested lists."

	| assocs childStart childTrace nextTime tree childIndex |
	tree := TDBContextTreeSlice newForContext: self originalContext.
	timeIndicesStream atEnd ifFalse:
		[nextTime := timeIndicesStream peek.
		assocs := self children associations.
		assocs ifNotEmpty:
			[childIndex := 1.
			childStart := (assocs at: childIndex) key.
			childTrace := (assocs at: childIndex) value].
	
		[:exit |
			[nextTime <= maxTimeIndex ifFalse: [^ exit value].
			(childStart isNil or: [nextTime < childStart])
				ifTrue:
					[tree addTime: timeIndicesStream next.
					timeIndicesStream atEnd ifTrue: [exit value].
					nextTime := timeIndicesStream peek]
				ifFalse:
					[nextTime <= childTrace maxTimeIndex
						ifTrue:
							[| childTree |
							childTree := childTrace
								makeTreeSliceForTimeStream: timeIndicesStream
								contractPaths: contractPaths.
							tree addChild: childTree.
							timeIndicesStream atEnd ifTrue: [exit value].
							nextTime := timeIndicesStream peek]
						ifFalse:
							[childIndex < assocs size
								ifTrue:
									[childIndex := childIndex + 1.
									childStart := (assocs at: childIndex) key.
									childTrace := (assocs at: childIndex) value]
								ifFalse:
									[childStart := childTrace := nil]]]]
				repeat]
					valueWithExit].
	
	contractPaths ifTrue: [tree := tree tryContract].
	^ tree