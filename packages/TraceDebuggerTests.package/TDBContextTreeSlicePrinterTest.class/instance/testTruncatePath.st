tests - building
testTruncatePath

	| path |
	path := #(1 2 3 4 5).
	#((0 0 (1 2 3 4 5))
	(1 0 (1 '...'))
	(2 0 (1 2 '...'))
	(0 1 ('...' 5))
	(0 2 ('...' 4 5))
	(1 2 (1 '...' 4 5))
	(3 1 (1 2 3 '...' 5))
	(5 0 (1 2 3 4 5))
	(6 0 (1 2 3 4 5))
	(3 2 (1 2 3 4 5))
	(3 4 (1 2 3 4 5))
	(0 5 (1 2 3 4 5))
	(0 6 (1 2 3 4 5))
	(4 3 (1 2 3 4 5)))
		tdbTuplesDo: [:left :right :expected |
			| truncated |
			truncated := self classUnderTest new
				truncateLeft: left;
				truncateRight: right;
				truncatePath: path.
			self assert: expected equals: truncated].