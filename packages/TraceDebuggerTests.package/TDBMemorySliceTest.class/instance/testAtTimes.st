tests - accessing
testAtTimes

	{{3 to: 3. {3 to: 3}. {1}. {nil}}.
	{2 to: 4. {2 to: 3. 4 to: 4}. {1. object}. {nil. nil}}.
	{3 to: 5. {3 to: 3. 4 to: 4. 5 to: 5}. {1. object. 3}. {nil. nil. sideEffects}}.
	{2 to: 1. {}. {}. {}}}
		tdbTuplesDo: [:intervals :expectedTimes :expectedValues :expectedSideEffects |
			| subSlice |
			subSlice := slice atTimes: intervals.
			self
				assert: expectedTimes equals: subSlice times;
				assert: subSlice values = expectedValues;
				assert: expectedSideEffects equals: subSlice sideEffects].
	
	self shouldRaiseError: [slice atTimes: (0 to: 1)].
	self shouldRaiseError: [slice atTimes: (5 to: 7)].