tests - primitives
testBitBlt2
	<timeout: 30 "seconds">

	| cursor morph screenshots |
	cursor := TDBCursor traceForBlock:
		[morph := RectangleMorph new
			addMorph: EllipseMorph new;
			yourself].
	screenshots := (cursor
		object: morph
		collect: [:ea | [ea imageForm] ifError: []])
			values.
	#(nil 1 1 1 1 1 2 3) with: screenshots do: [:expected :eachScreenshot |
		expected
			ifNil: [self assert: eachScreenshot isNil]
			ifNotNil: [self assert: expected equals: eachScreenshot colorsUsed size]].