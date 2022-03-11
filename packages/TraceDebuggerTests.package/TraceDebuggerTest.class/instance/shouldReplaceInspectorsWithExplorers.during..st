support
shouldReplaceInspectorsWithExplorers: aBoolean during: aBlock

	| previous |
	previous := self classUnderTest shouldReplaceInspectorsWithExplorers.
	self classUnderTest shouldReplaceInspectorsWithExplorers: aBoolean.
	^ aBlock ensure:
		[self classUnderTest shouldReplaceInspectorsWithExplorers: previous]