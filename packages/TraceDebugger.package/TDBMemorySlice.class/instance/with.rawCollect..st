enumerating - raw values
with: anotherMemorySlice rawCollect: aBlock
	"Combine both the receiver and anotherMemorySlice based on their time intervals. For each combination, evaluate aBlock with the corresponding raw values from both slices. Answer a new slice of the results.
	
	Note: Due to performance reasons/lack of demand, sideEffects are not preserved during this transformation."

	| intersectedIntervals intersectedValues lastStart otherIndex otherInterval thisIndex thisInterval otherValues thisValues |
	self assert: self intervals first start = anotherMemorySlice intervals first start.
	self assert: self intervals last stop = anotherMemorySlice intervals last stop.
	self assert: (self intervals fold: #,) = (anotherMemorySlice intervals fold: #,).
	
	intersectedIntervals := (Array new: self intervals size + anotherMemorySlice intervals size) writeStream.
	intersectedValues := (Array new: intersectedIntervals size) writeStream.
	
	thisInterval := self intervals at: (thisIndex := 1).
	otherInterval := anotherMemorySlice intervals at: (otherIndex := 1).
	lastStart := thisInterval first.
	thisValues := self rawValues readStream.
	otherValues := anotherMemorySlice rawValues readStream.
	[thisInterval last <=> otherInterval last caseOf:
		{[0] ->
			[intersectedIntervals nextPut: (lastStart to: thisInterval last).
			intersectedValues nextPut: (aBlock value: thisValues next value: otherValues next).
			thisInterval := self intervals at: (thisIndex := thisIndex + 1) ifAbsent:
				[^ self species memory: memory intervals: intersectedIntervals contents rawValues: intersectedValues contents].
			otherInterval := anotherMemorySlice intervals at: (otherIndex := otherIndex + 1).
			lastStart := otherInterval first].
		[-1] ->
			[intersectedIntervals nextPut: (lastStart to: thisInterval last).
			intersectedValues nextPut: (aBlock value: thisValues next value: otherValues peek).
			thisInterval := self intervals at: (thisIndex := thisIndex + 1) ifAbsent:
				[^ self species memory: memory intervals: intersectedIntervals contents rawValues: intersectedValues contents].
			lastStart := thisInterval first].
		[1] ->
			[intersectedIntervals nextPut: (lastStart to: otherInterval last).
			intersectedValues nextPut: (aBlock value: thisValues peek value: otherValues next).
			otherInterval := anotherMemorySlice intervals at: (otherIndex := otherIndex + 1) ifAbsent:
				[^ self species memory: memory intervals: intersectedIntervals contents rawValues: intersectedValues contents].
			lastStart := otherInterval first]}] repeat.