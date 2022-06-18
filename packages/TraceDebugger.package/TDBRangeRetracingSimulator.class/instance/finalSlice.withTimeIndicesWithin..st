private
finalSlice: finalSlice withTimeIndicesWithin: fullTimeIndices

	| allTimeIndices finalTimeIndices |
	"allVectors ifNotEmpty: [Smalltalk garbageCollect]."
	self flag: #gc. "As some vectors might be no longer contained in the result but only referenced in the weak set, we would want to do a full GC here. Unfortunately, this would be too slow. We need a partial GC option for this.
	Furthermore, SimPluggableWeakKeyDictionary which is used for the sideEffects and ownObjects currently has a memory leak for objects that are associated to themselves, causing any slices referenced by them not being GC'ed as well."
	
	allTimeIndices := (allVectors copyWith: finalSlice) gather:
		[:slice |
			slice intervals gather:
				[:interval |
					{interval start clampLow: fullTimeIndices first high: fullTimeIndices max.
					(interval stop clampLow: fullTimeIndices first high: fullTimeIndices max) + 1}]].
	allTimeIndices ifEmpty: [^ finalSlice].
	
	finalTimeIndices := (allTimeIndices withoutDuplicates sorted
		overlappingPairsCollect: [:a :b | a to: b - 1]).
	^ finalSlice withBasicIntervals: finalTimeIndices