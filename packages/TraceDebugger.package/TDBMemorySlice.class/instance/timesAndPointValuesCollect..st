enumerating
timesAndPointValuesCollect: aBlock
	"Evaluate aBlock with each of the receiver's values and the corresponding time index. Answer a collection of the results.
	See also #timesAndValuesCollect:."
	
	^ Array new: self size streamContents: [:stream |
		intervals with: rawValues do: [:interval :rawValue |
			(Mirror objectClass: rawValue) isTdbMemorySliceClass
				ifFalse:
					[interval do: [:timeIndex |
						stream nextPut:
							(aBlock value: timeIndex value: (memory object: rawValue atTime: timeIndex))]]
					ifTrue:
						[(rawValue atTimes: interval) timesAndPointValuesCollect: [:eachTimeIndex :eachValue |
							stream nextPut:
								(aBlock value: eachTimeIndex value: eachValue)]]]]