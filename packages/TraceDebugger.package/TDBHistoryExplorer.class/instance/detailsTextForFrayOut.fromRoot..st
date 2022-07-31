labels & details
detailsTextForFrayOut: aFrayOutError fromRoot: rootContextSlice
	"Construct a new context tree slice similar to #updateContextTreeSlice and display all the results."

	| frayMemorySlice frayTimes frayTreeSlice contextSliceLeaves frayRootContextSlice |
	frayMemorySlice := aFrayOutError slice.
	frayTimes := frayMemorySlice intervals collect: [:interval | interval first].
	frayTreeSlice := self cursor
		makeTreeSliceForTimes: frayTimes
		contractPaths: self shouldContractPaths.
	frayRootContextSlice := frayTreeSlice atMostPath:
		(rootContextSlice newPrinter
			root: nil;
			findPath).
	contextSliceLeaves := frayTreeSlice allLeaves.
	
	^ Text streamContents: [:stream |
		stream
			withAttributes:
				(self tdbAttributesForStyle: self styleForError)
					, (self tdbAttributesForStyle: self styleForHeader)
			do:
				[stream
					nextPutAll: 'Value frayed out into ';
					print: contextSliceLeaves size;
					nextPutAll: ' parts (';
					withAttribute:
						(PluggableTextAttribute evalBlock:
							[self flag: #todo. "Improve label, rename selector"
							self spawnMemorySlice: frayMemorySlice expression:
								('details for {1}' format: {self expression})])
						do:
							[stream nextPutAll: 'spawn'];
					nextPutAll: '):'].
		
		self
			printDetailsTextForLeaves: contextSliceLeaves
			fromRoot: frayRootContextSlice
			on: stream
			getText: [:contextSlice |
				frayMemorySlice rangeValueAtTime: contextSlice maxTimeIndex]
			selectAction: [:contextSlice |
				self withSnapshotAtTime: contextSlice maxTimeIndex do: [:snapshot |
					self auxiliaryInspector inspectObject: snapshot]]]