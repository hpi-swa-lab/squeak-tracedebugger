*TraceDebugger-Core-enumerating
tdbSequentiallyGroupBy: keyBlock gather: gatherBlock
	"Group the receiver into chunks of subsequent elements for that keyBlock returns the same key. For each group, evaluate gatherBlock and gather the results in a new collection."

	| groupStart groupEnd groupKey results index |
	groupStart := 1.
	groupEnd := 0.
	results := OrderedCollection new.
	
	index := 1.
	[groupStart <= self size] whileTrue:
		[| ea key |
		(index <= self size
			ifTrue:
				[ea := self at: index.
				key := keyBlock value: ea.
				groupStart > groupEnd
					ifTrue: [groupKey := key. true]
					ifFalse: [key = groupKey]]
			ifFalse: [false])
				ifTrue: 
					[index := index + 1.
					groupEnd := groupEnd + 1]
				ifFalse:
					[results addAll:
						(gatherBlock
							value: groupKey
							value: (self copyFrom: groupStart to: groupEnd)).
					groupStart := groupEnd + 1]].
	
	^ results