initialize-release
initializeIntervals

	intervals overlappingPairsDo: [:a :b | self assert: a last + 1 = b first].
	self coalesce.